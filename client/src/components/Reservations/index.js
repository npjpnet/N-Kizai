import React, { useState } from 'react';

import EquipCard from './EquipCard';

const searchedProducts = [
  {
    name: 'U2C-BF30BK',
    maker: 'エレコム',
    genre: 'pa',
    devices: [
      { code: 'NP-0014', serialNumber: '', status: 'ready', remarks: '' },
    ],
  },
  {
    name: 'T-T02-3650WH/RS',
    maker: 'エレコム',
    genre: 'oa',
    devices: [
      { code: 'NP-0044', serialNumber: '', status: 'ready', remarks: '' },
    ],
  },
  {
    name: 'T-T02-3650WH/RS',
    maker: 'エレコム',
    genre: 'oa',
    devices: [
      { code: 'NP-0048', serialNumber: '', status: 'ready', remarks: '' },
    ],
  },
];

const AddProduct = (props) => {
  const [searchText, setSearchText] = useState('');
  const [selectDevice, setSelectDevice] = useState('');

  const SearchedDevices = (props) =>
    searchedProducts.map((product) =>
      product.devices.map((device) => {
        return (
          <option key={device.code} value={device.code}>
            {device.code} : {product.name}
          </option>
        );
      })
    );

  return (
    <div>
      <p>機材の使用予約を行います。</p>
      <div>
        <form>
          <select className="nk nk_select">
            <option value="">イベントを選択してください</option>
            <option value="myfes2020">マイフェス2020</option>
          </select>
          <input
            type="text"
            className="nk nk_input"
            placeholder="横断検索"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="nk nk_select"
            value={selectDevice}
            onChange={(e) => setSelectDevice(e.target.value)}
          >
            <option value="">機材を選択してください</option>
            <SearchedDevices />
          </select>
          <input type="text" className="nk nk_input" placeholder="特記事項" />
          <button type="button" className="nk nk_button">
            予約登録
          </button>
        </form>
      </div>
      <div className="nk_cardContainer">
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
        <EquipCard name="機材" code="コード" remarks="備考" />
      </div>
    </div>
  );
};

export default AddProduct;
