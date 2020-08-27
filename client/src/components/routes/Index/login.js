import React from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => (
  <div>
    <p>ログインしてください</p>
    <div>
      <form>
        <input type="text" className="nk nk_input" placeholder="ログインID" />
        <input
          type="password"
          className="nk nk_input"
          placeholder="パスワード"
        />
        <button type="button" className="nk nk_button">
          ログイン
        </button>
      </form>

      <p>または、N-Kizaiキーをスキャンしてください。</p>
      <input
        type="password"
        className="nk nk_input"
        placeholder="N-Kizaiキー"
      />
    </div>
  </div>
);

export default Index;
