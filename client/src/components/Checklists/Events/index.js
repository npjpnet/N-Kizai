import React from "react";

import EquipCard from "./EquipCard";

const Index = (props) => (
  <div>
    <p>マイフェス2020 機材チェックリスト</p>
    <div className="nk">
      <span className="nk_radioGroup">
        <input id="confirmRadio" type="radio" name="operation" checked />
        <label className="nk_label" for="confirmRadio">
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
        <EquipCard title="うんち" code="TK-0001" />
        <EquipCard title="うんち" code="TK-0001" />
        <EquipCard title="うんち" code="TK-0001" />
        <EquipCard title="うんち" code="TK-0001" />
        <EquipCard title="うんち" code="TK-0001" />
        <EquipCard title="うんち" code="TK-0001" />
      </div>
    </div>
  </div>
);

export default Index;
