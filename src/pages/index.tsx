import type { HeadFC } from 'gatsby';
import { IndexTemplate } from '../components/templates/Index';

export default function IndexPage() {
  return <IndexTemplate />;
}

export const Head: HeadFC = () => <title>プログラミング日記</title>;
