import React from 'react';

export default (props) => (
  <div className="nk_card">
    <div className="nk_card_title">
      {props.name}
      <span className="nk_card_code">{props.code}</span>
    </div>
    <div className="nk_card_content">{props.remarks}</div>
    <div className="nk_card_control">
      <button
        className="nk_button nk_button-inline nk_button-danger"
        onClick={props.removeItem}
      >
        取消
      </button>
    </div>
  </div>
);
