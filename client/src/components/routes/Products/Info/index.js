import React from 'react';

import EquipCard from './EquipCard';

import Core from '../../../../libs/n-kizai';
const core = new Core();

const ProductInfo = (props) => {
  const products = core.getProductById('334');
  const Devices = (props) =>
    products.devices.map((device) => (
      <EquipCard name={device.code} status={device.status} />
    ));

  return (
    <div>
      <p>機材情報</p>
      <h2>
        {products.name}({products.devices.length})
      </h2>
      <p></p>
      <h2>個体情報</h2>
      <div class="container nk_cardContainer">
        <Devices />
      </div>
    </div>
  );
};

export default ProductInfo;
