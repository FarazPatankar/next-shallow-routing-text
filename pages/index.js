import 'styles/index.css';
import Link from 'next/link';

import { withApollo } from 'lib/apollo';

const IndexPage = () => (
  <Link href="/visas/india">
    <button type="button" className="bg-purple-500 text-white py-2 px-4 rounded">Click me to go to country page.</button>
  </Link>
)

export default withApollo(IndexPage);
