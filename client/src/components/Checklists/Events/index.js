import React, { useState } from 'react';

import EquipCard from './EquipCard';

const reservedItems = [
  {
    id: '1',
    code: 'NKNW-0001',
    name: '配信機材',
    remarks: '本部用',
    category: 'BROADCAST',
    status: null,
  },
  {
    id: '24',
    code: 'NKNW-0024',
    name: 'カメラ',
    remarks: '本部用',
    category: 'OFFICE',
    status: null,
  },
  {
    id: '43',
    code: 'NW-0002',
    name: 'パソコン',
    remarks: '配信用',
    category: 'BROADCAST',
    status: null,
  },
  {
    id: '54',
    code: 'NP-0001',
    name: 'ミキサ',
    remarks: '配信用',
    category: 'BROADCAST',
    status: null,
  },
  {
    id: '5',
    code: 'NKNW-0005',
    name: 'LANケーブル',
    remarks: '配信用',
    category: 'BROADCAST',
    status: null,
  },
  {
    id: '164',
    code: 'NKNP-0006',
    name: 'フォンケーブル',
    remarks: '配信用',
    category: 'BROADCAST',
    status: null,
  },
];

const Index = (props) => {
  const [items, setItems] = useState(reservedItems);
  const [searchText, setSearchText] = useState('');
  const [operationMode, setOperationMode] = useState({
    check: true,
    remove: false,
  });

  const searchItem = (code) => {
    if (!code) return;

    const result = items.filter((i) => i.code === code);
    if (result.length === 0) {
      alert(`個体コード ${code} の備品が見つかりませんでした`);
      return;
    }

    if (operationMode.check) {
      checkItem(code);
      alert(`個体コード ${code} を確認しました。`);
    } else if (operationMode.remove) {
      removeItem(code);
      alert(`個体コード ${code} を削除しました。`);
    }
  };

  const checkItem = (code) => {
    regenerateList(code);
  };
  const removeItem = (code) => {
    regenerateList(code);
  };
  const regenerateList = (code) => {
    setItems(items.filter((i) => i.code !== code));
  };

  return (
    <div>
      <p>マイフェス2020 機材チェックリスト</p>
      <div className="nk">
        <span className="nk_radioGroup">
          <input
            id="checkRadio"
            type="radio"
            name="operation"
            checked={operationMode.check}
            onChange={() => setOperationMode({ check: true, remove: false })}
          />
          <label className="nk_label" htmlFor="checkRadio">
            確認
          </label>
        </span>
        <span className="nk_radioGroup">
          <input
            id="removeRadio"
            type="radio"
            name="operation"
            checked={operationMode.remove}
            onChange={() => setOperationMode({ check: false, remove: true })}
          />
          <label className="nk_label" htmlFor="removeRadio">
            取消
          </label>
        </span>
        <input
          className="nk nk_input"
          type="text"
          placeholder="個体コード"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={(e) => {
            if (e.which !== 13) return;
            searchItem(searchText);
            setSearchText('');
          }}
        />
      </div>
      <div>
        <div className="nk_cardContainer">
          {items.map((i) => (
            <EquipCard
              key={i.code}
              name={i.name}
              code={i.code}
              remarks={i.remarks}
              checkItem={() => checkItem(i.code)}
              removeItem={() => removeItem(i.code)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
