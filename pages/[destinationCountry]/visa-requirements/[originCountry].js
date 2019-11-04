import { withApollo } from 'lib/apollo';

import CountryDetails from 'components/CountryDetails';


const VisaRequirements = () => (
  <CountryDetails />
)

export default withApollo(VisaRequirements);
