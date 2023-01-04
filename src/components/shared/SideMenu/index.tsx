import { Link } from 'gatsby';
import { useCategoriesArticles } from '../../../hooks/useCategoriesArticles';
import * as styles from './styles';

export const SideMenu = () => {
  const nodes = useCategoriesArticles();
  const others = nodes[0];
  const webfront = nodes[1];
  const server = nodes[2];
  const res = [webfront, server, others];

  return (
    <div css={styles.sideMenu}>
      <div css={styles.container}>
        <ul css={styles.tagList}>
          {res.map((category, index) => {
            return (
              <li key={`${category.fieldValue}-${index}`}>
                <p css={styles.tagTitle}>{category.fieldValue}</p>
                <ul>
                  {category.group.map((group, index) => (
                    <li key={`${group.fieldValue}-${index}`}>
                      {group.fieldValue}
                      <ul>
                        {group.edges.map(({ node }) => (
                          <li key={node.id}>
                            <Link
                              to={`/${node.fields?.category}/${node.fields?.name}`}
                              css={styles.link}
                              activeStyle={{ fontWeight: 'bold' }}
                            >
                              <p css={styles.articleTitle}>
                                {node.frontmatter?.title}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
