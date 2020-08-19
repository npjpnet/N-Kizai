import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Index = (props) => (
  <div>
    <p>操作を選択してください</p>
    <div>
      <Link to="/" className="nk_button">
        チェックリスト確認
      </Link>
      <Link to="/" className="nk_button">
        予約作成
      </Link>
      <Link to="/" className="nk_button">
        機材登録
      </Link>
      <Link to="/" className="nk_button">
        個体登録
      </Link>
    </div>
  </div>
);

export default Index;
