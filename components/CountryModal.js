import Router from 'next/router';
import OutsideClickHandler from 'react-outside-click-handler';

import ModalContainer from 'components/ModalContainer';
import CountryDetails from 'components/CountryDetails';

const CountryModal = ({ setShowCountryModal }) => (
  <ModalContainer>
    <OutsideClickHandler onOutsideClick={() => setShowCountryModal ? setShowCountryModal(false) : Router.back()}>
      <CountryDetails />
    </OutsideClickHandler>
  </ModalContainer>
)

export default CountryModal;
