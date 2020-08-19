import React from "react";

const Index = (props) => (
  <div>
    <p>マイフェス2020 機材チェックリスト</p>
    <div>
      <span className="nk_radioGroup">
        <input id="confirmRadio" type="radio" name="operation" checked />
        <label className="nk_label" for="confirmRadio">
          確認
        </label>
      </span>
      <span className="nk_radioGroup">
        <input id="clearRadio" type="radio" name="operation" />
        <label className="nk_label" for="clearRadio">
          取消
        </label>
      </span>
      <input className="nk nk_input" type="text" placeholder="個体コード" />
    </div>
    <div>
      <div className="nk nk_equipCardContainer">
        <div className="nk_equipCard">
          <div className="nk_equipCard_title">
            ATEM Mini Pro<span className="nk_equipCard_code">TK-0001</span>
          </div>
          <div className="nk_equipCard_control">
            <button className="nk_equipCard_control_confirm">確認</button>
            <button className="nk_equipCard_control_clear">取消</button>
          </div>
        </div>
        <div className="nk_equipCard">
          <div className="nk_equipCard_title">
            ATEM Mini Pro<span className="nk_equipCard_code">TK-0001</span>
          </div>
          <div className="nk_equipCard_control">
            <button className="nk_equipCard_control_confirm">確認</button>
            <button className="nk_equipCard_control_clear">取消</button>
          </div>
        </div>
        <div className="nk_equipCard">
          <div className="nk_equipCard_title">
            ATEM Mini Pro<span className="nk_equipCard_code">TK-0001</span>
          </div>
          <div className="nk_equipCard_control">
            <button className="nk_equipCard_control_confirm">確認</button>
            <button className="nk_equipCard_control_clear">取消</button>
          </div>
        </div>
        <div className="nk_equipCard">
          <div className="nk_equipCard_title">
            ATEM Mini Pro<span className="nk_equipCard_code">TK-0001</span>
          </div>
          <div className="nk_equipCard_control">
            <button className="nk_equipCard_control_confirm">確認</button>
            <button className="nk_equipCard_control_clear">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
