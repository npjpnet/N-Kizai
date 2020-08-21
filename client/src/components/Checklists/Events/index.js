import React, { useState } from "react";

import EquipCard from "./EquipCard";

const reservedItems = [
  {
    id: "1",
    code: "NKNW-0001",
    name: "配信機材",
    remarks: "本部用",
    category: "BROADCAST",
    status: null,
  },
  {
    id: "24",
    code: "NKNW-0024",
    name: "カメラ",
    remarks: "本部用",
    category: "OFFICE",
    status: null,
  },
  {
    id: "43",
    code: "NW-0002",
    name: "パソコン",
    remarks: "配信用",
    category: "BROADCAST",
    status: null,
  },
  {
    id: "54",
    code: "NP-0001",
    name: "ミキサ",
    remarks: "配信用",
    category: "BROADCAST",
    status: null,
  },
  {
    id: "5",
    code: "NKNW-0005",
    name: "LANケーブル",
    remarks: "配信用",
    category: "BROADCAST",
    status: null,
  },
  {
    id: "164",
    code: "NKNP-0006",
    name: "フォンケーブル",
    remarks: "配信用",
    category: "BROADCAST",
    status: null,
  },
];

const Index = (props) => {
  const [items, setItems] = useState(reservedItems);

  const checkItem = (id) => {
    regenerateList(id);
  };
  const removeItem = (id) => {
    regenerateList(id);
  };
  const regenerateList = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div>
      <p>マイフェス2020 機材チェックリスト</p>
      <div className="nk">
        <span className="nk_radioGroup">
          <input id="checkRadio" type="radio" name="operation" checked />
          <label className="nk_label" for="checkRadio">
            確認
          </label>
        </span>
        <span className="nk_radioGroup">
          <input id="clearRadio" type="radio" name="operation" />
          <label className="nk_label" for="clearRadio">
            取消
          </label>
        </span>
        <input
          className="nk nk_input"
          type="text"
          placeholder="個体コード"
          onKeyPress={(e) => {
            if (e.which !== 13) return;
            alert("うんち");
          }}
        />
      </div>
      <div>
        <div className="nk_cardContainer">
          {items.map((i) => (
            <EquipCard
              key={i.id}
              title={i.name}
              code={i.code}
              checkItem={() => checkItem(i.id)}
              removeItem={() => removeItem(i.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
