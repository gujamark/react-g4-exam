import React, { useState, useEffect } from 'react';
import API_SERVICE from '../services/api';

export const AddressesContext = React.createContext(null);

function AddressesProviderComponent({ children }) {
  const [addressList, setAddressList] = useState([]);

  const loadAddressListAsync = async () => {
    const list = await API_SERVICE.getAddresses();
    setAddressList(list['data']);
  };

  useEffect(() => {
    loadAddressListAsync();
  }, []);

  AddressesContext.displayName = 'AddressesContext';

  return (
    <AddressesContext.Provider value={{ addressList, setAddressList }}>
      {children}
    </AddressesContext.Provider>
  );
}

export default AddressesProviderComponent;
