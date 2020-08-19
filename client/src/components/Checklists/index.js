import React from "react";

import "./index.css";

const Index = (props) => (
  <div>
    <p>イベントを選択してください</p>
    <div>
      <select className="nk_select">
        <option value="myfes2020">マイフェス2020</option>
      </select>
      <button className="nk_button">送信</button>
    </div>
  </div>
);

export default Index;
