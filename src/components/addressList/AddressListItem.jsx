import css from './AddressList.module.css';

function AddressListItem({ address }) {
  return (
    <div className={css.AddressListItemCard}>
      <p>{address.street}</p>
      <p>{address.streetName}</p>
      <p>{address.buildingNumber}</p>
      <p>{address.city}</p>
      <p>{address.country}</p>
      <p>{address.county_code}</p>
      <p>{address.latitude}</p>
      <p>{address.longitude}</p>
    </div>
  );
}

export default AddressListItem;
