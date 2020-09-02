import React from 'react';

export default (props) => (
  <div className="nk_card">
    <div className="nk_card_title">
      <small>
        <span className={`nk_label nk_label-${props.status}`}>
          {props.status === 'ready' ? '使用可能' : ''}
        </span>
      </small>
      {props.name}
    </div>
    <div className="nk_card_control">
      {props.status !== 'ready' && (
        <button className="nk_button nk_button-inline nk_button-success">
          使用可能
        </button>
      )}
      <button className="nk_button nk_button-inline nk_button-warning">
        修理中
      </button>
      <button className="nk_button nk_button-inline nk_button-warning">
        故障
      </button>
      <button className="nk_button nk_button-inline nk_button-danger">
        譲渡
      </button>
      <button className="nk_button nk_button-inline nk_button-danger">
        廃棄
      </button>
    </div>
  </div>
);
