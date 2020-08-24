import React from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => (
  <div>
    <p>イベントを選択してください</p>
    <div>
      <select className="nk nk_select">
        <option value="">イベントを選択してください</option>
        <option value="myfes2020">マイフェス2020</option>
      </select>
      {/* <button className="nk nk_button">送信</button> */}
      <Link to="/checklists/myfes2020" className="nk nk_button">
        送信
      </Link>
    </div>
  </div>
);

export default Index;
