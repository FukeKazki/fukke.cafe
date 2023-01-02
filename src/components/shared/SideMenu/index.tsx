import { Link } from 'gatsby';
import { useTaggedArticles } from '../../../hooks/useTaggedArticles';
import * as styles from './styles';

export const SideMenu = () => {
  const nodes = useTaggedArticles();
  const others = nodes[0];
  const webfront = nodes[1];
  const server = nodes[2];
  const res = [webfront, server, others];

  return (
    <div css={styles.sideMenu}>
      <div css={styles.container}>
        <ul css={styles.tagList}>
          {res.map((node, index) => {
            return (
              <li key={`${node.fieldValue}-${index}`}>
                <p css={styles.tagTitle}>{node.fieldValue}</p>
                <ul>
                  {node.nodes.map(v => (
                    <li key={v.id}>
                      <Link
                        to={`/${v.fields?.category}/${v.fields?.name}`}
                        css={styles.link}
                        activeStyle={{ fontWeight: 'bold' }}
                      >
                        <p css={styles.articleTitle}>{v.frontmatter?.title}</p>
                      </Link>
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
