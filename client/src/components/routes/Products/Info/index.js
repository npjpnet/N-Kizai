import React, { useState, useEffect } from 'react';

import EquipCard from './EquipCard';

import Core from '../../../../libs/n-kizai';
const core = new Core();

const ProductInfo = (props) => {
  const [helloworld, setHelloworld] = useState('unchiburi');
  useEffect(() => {
    const f = async () => {
      const hello = await core.helloWorld();
      setHelloworld(hello.data.msg);
    };
    f();
  }, []);

  const products = core.getProductById('334');
  const Devices = (props) =>
    products.devices.map((device) => (
      <EquipCard
        key={device.code}
        name={device.code}
        remarks={device.remarks}
        status={device.status}
      />
    ));

  return (
    <div>
      <p>機材情報 {helloworld}</p>
      <h2>
        {products.name}({products.devices.length})
      </h2>
      <p></p>
      <h2>個体情報</h2>
      <div className="container nk_cardContainer">
        <Devices />
      </div>
    </div>
  );
};

export default ProductInfo;
