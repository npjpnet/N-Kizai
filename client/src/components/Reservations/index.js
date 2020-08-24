import React from 'react';

import EquipCard from './EquipCard';

const AddProduct = (props) => {
  return (
    <div>
      <p>機材の使用予約を行います。</p>
      <div>
        <form>
          <select className="nk nk_select">
            <option value="">イベントを選択してください</option>
            <option value="myfes2020">マイフェス2020</option>
          </select>
          <input type="text" className="nk nk_input" placeholder="横断検索" />
          <select className="nk nk_select">
            <option value="">機材を選択してください</option>
          </select>
          <input type="text" className="nk nk_input" placeholder="備考" />
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
