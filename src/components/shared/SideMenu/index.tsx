import { useArticles } from '../../../hooks/useArticles';
import * as styles from './styles';

export const SideMenu = () => {
  const titles = useArticles();

  return (
    <div css={styles.sideMenu}>
      <ul>
        {titles.map(title => {
          return (
            <li>{ title }</li>
          )
        })}
      </ul>
    </div>
  );
};
