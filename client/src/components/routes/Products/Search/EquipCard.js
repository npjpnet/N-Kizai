import React from 'react';

export default (props) => (
  <div className="nk_card">
    <div className="nk_card_title">{props.name}</div>
    <div className="nk_card_content">{props.remarks}</div>
    <div className="nk_card_control">
      <button
        className="nk_button nk_button-inline nk_button-success"
        onClick={props.deviceInfo}
      >
        機材譲歩
      </button>
    </div>
  </div>
);
