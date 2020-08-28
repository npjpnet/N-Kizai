import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import EquipCard from './EquipCard';

const searchedProducts = [
  {
    id: '5f41ff42f12d5a5ec0f783a7',
    name: 'U2C-BF30BK',
    maker: 'エレコム',
    genre: 'pa',
    devices: [
      { code: 'NP-0014', serialNumber: '', status: 'ready', remarks: '' },
    ],
  },
  {
    id: '5f464ee25410e3231058e73a',
    name: 'T-T02-3650WH/RS',
    maker: 'エレコム',
    genre: 'oa',
    devices: [
      { code: 'NP-0044', serialNumber: '', status: 'ready', remarks: '' },
      { code: 'NP-0048', serialNumber: '', status: 'ready', remarks: '' },
    ],
  },
];

const SearchProducts = (props) => {
  const [products, setProducts] = useState(searchedProducts);

  const history = useHistory();
  const pushHistory = (path) => history.push(path);

  const SearchedProducts = (props) =>
    products.map((product) => (
      <EquipCard
        name={product.name}
        remarks={`利用可能 : ${product.devices.length}`}
        deviceInfo={() => pushHistory(`/products/id/${product.id}`)}
      />
    ));

  return (
    <div>
      <p>機材の検索を行います</p>
      <div className="container">
        <input type="text" className="nk nk_input" placeholder="横断検索" />
      </div>
      <div className="container">
        <h2>機材検索({products.length}件)</h2>
        <div className="nk_cardContainer">
          <SearchedProducts />
        </div>
      </div>
    </div>
  );
};

export default SearchProducts;
