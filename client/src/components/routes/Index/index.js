import React from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => (
  <div>
    <p>操作を選択してください</p>
    <div>
      <Link to="/checklists" className="nk nk_button">
        チェックリスト確認
      </Link>
      <Link to="/reservations" className="nk nk_button">
        予約作成
      </Link>
      <Link to="/products/add" className="nk nk_button">
        機材登録
      </Link>
      <Link to="/" className="nk nk_button">
        機材検索
      </Link>
      <Link to="/" className="nk nk_button">
        ログアウト
      </Link>
    </div>
  </div>
);

export default Index;
