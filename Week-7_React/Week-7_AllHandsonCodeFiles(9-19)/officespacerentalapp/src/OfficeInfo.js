import React from 'react';
const officeImg = "https://t4.ftcdn.net/jpg/03/84/55/29/360_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg";


const OfficeInfo = () => {
  const element = "Office Space";
  const jsxatt = (
    <img
      src={officeImg}
      width="45%"
      height="35%"
      alt="Office Space"
    />
  );

  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 style={{ color: ItemName.Rent > 60000 ? 'green' : 'red' }}>
        Rent: Rs. {ItemName.Rent}
      </h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
};

export default OfficeInfo;
