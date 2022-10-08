import { useArticles } from '../../../hooks/useArticles';
import * as styles from './styles';

export const SideMenu = () => {
  const titles = useArticles();

  return (
    <div css={styles.sideMenu}>
      <ul>
        {titles.map((title, index) => {
          return (
            <li key={`${title}-${index}`}>{ title }</li>
          )
        })}
      </ul>
    </div>
  );
};
