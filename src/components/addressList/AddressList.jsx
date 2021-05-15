import { AddressesContext } from '../../contexts/AddressesProvider';
import { useContext } from 'react';
import AddressListItem from './AddressListItem';

function AddressList() {
  const { addressList } = useContext(AddressesContext);
  return (
    <div className="d-flex flex-wrap">
      {addressList.map((item, i) => {
        return <AddressListItem address={item} key={i} />;
      })}
    </div>
  );
}

export default AddressList;
