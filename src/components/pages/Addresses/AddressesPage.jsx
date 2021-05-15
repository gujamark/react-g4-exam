import { withAuthProtected } from '../../../hoc';
import AddressesProviderComponent from '../../../contexts/AddressesProvider';
import AddressList from '../../../components/addressList';

function AddressesPage() {
  return (
    <AddressesProviderComponent>
      <AddressList />
    </AddressesProviderComponent>
  );
}

export default withAuthProtected(AddressesPage);
