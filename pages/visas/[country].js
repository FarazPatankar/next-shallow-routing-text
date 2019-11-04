import 'styles/index.css';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { withApollo } from 'lib/apollo';

import CountryModal from 'components/CountryModal';

const Country = () => {
  const [showCountryModal, setShowCountryModal] = useState(false)
  const router = useRouter();
  console.log('query', router.query)
  return (
    <div className="flex flex-col container mx-auto mt-10">
      <Link
        href="/visas/india?showCountryModal=true"
        as="/bahrain/visa-requirements/india"
        shallow
      >
        <a className="mb-5 w-full text-center">This link tag with shallow routing does not work. It ends up opening the page instead of showing the modal.</a>
      </Link>
      <button className="bg-purple-500 text-white py-2 px-4 rounded" type="button" onClick={() => setShowCountryModal(true)}>
        <a>This button with useState renders the modal.</a>
      </button>
      {router.query.showCountryModal && (
        <CountryModal />
      )}
      {showCountryModal && (
        <CountryModal setShowCountryModal={setShowCountryModal} />
      )}
    </div>
  );
}

export default withApollo(Country);
