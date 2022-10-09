import { Link } from 'gatsby';
import { useTaggedArticles } from '../../../hooks/useTaggedArticles';
import * as styles from './styles';

export const SideMenu = () => {
  const nodes = useTaggedArticles();

  return (
    <div css={styles.sideMenu}>
      <ul css={styles.tagList}>
        {nodes.map((node, index) => {
          return (
            <li key={`${node.fieldValue}-${index}`}>
              <p css={styles.tagTitle}>{node.fieldValue}</p>
              <ul>
                {node.nodes.map(v => (
                  <li key={v.id}>
                    <Link to={`/${v.fields?.category}/${v.fields?.name}`}>
                      <p css={styles.articleTitle}>{v.frontmatter?.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
