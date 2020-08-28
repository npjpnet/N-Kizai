import React from 'react';

export default (props) => (
  <div className="nk_card">
    <div className="nk_card_title">{props.name}</div>
    <div className="nk_card_content">{props.remarks}</div>
    <div className="nk_card_control">
      <button
        className="nk_button nk_button-inline nk_button-success"
        // onClick={props.removeItem}
      >
        情報
      </button>
    </div>
  </div>
);
