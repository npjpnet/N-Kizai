import React from "react";
import { Link } from "react-router-dom";

import pkg from "./../../../package.json";

const Index = (props) => (
  <div>
    <p>
      N-Kizai v{pkg.version}
      <br />
      操作を選択してください
    </p>
    <div>
      <Link to="/checklists" className="nk nk_button">
        チェックリスト確認
      </Link>
      <Link to="/" className="nk nk_button">
        予約作成
      </Link>
      <Link to="/" className="nk nk_button">
        機材登録
      </Link>
      <Link to="/" className="nk nk_button">
        個体登録
      </Link>
      <Link to="/" className="nk nk_button">
        ログアウト
      </Link>
    </div>
  </div>
);

export default Index;
