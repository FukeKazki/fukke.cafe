import { HeadFC } from 'gatsby';

const NotFoundPage = () => {
  return (
    <main>
      <p>404</p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
