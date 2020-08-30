import React, { useState } from 'react';

import Core from './../../../libs/n-kizai';
const core = new Core();

const defaultData = {
  prefix: '',
  genre: '',
  name: '',
  maker: '',
  serialNumber: '',
  accessories: '',
  jan: '',
  remarks: '',
};

const AddProduct = (props) => {
  const [form, setForm] = useState(defaultData);
  const [previousProductId, setPreviousProductId] = useState('');

  const [product, setProduct] = useState(null);
  const [addedDevice, setAddedDevice] = useState(null);

  const resetForm = () => {
    setForm(defaultData);
    setPreviousProductId('');
  };

  const addProduct = () => {
    const product = previousProductId
      ? core.getProductById(previousProductId)
      : core.addProducts({
          name: form.name,
          genre: form.genre,
          maker: form.maker,
        });

    const device = core.addDeviceByProductId(product.id, {
      prefix: form.prefix,
      serialNumber: form.serialNumber,
      accessories: form.accessories,
      jan: form.jan,
      remarks: form.remarks,
    });

    setPreviousProductId(product.id);

    setProduct(product);
    setAddedDevice(device);
  };

  return (
    <div>
      <p>機材を登録します。</p>
      <div>
        {previousProductId && (
          <div className="container">
            <button
              type="button"
              className="nk nk_button nk_button-danger"
              onClick={() => resetForm()}
            >
              入力内容をクリア
            </button>
          </div>
        )}
        {product && addedDevice !== 0 && (
          <p>
            {product.name}({addedDevice.code})を登録しました
          </p>
        )}

        <form>
          <input
            type="text"
            className="nk nk_input"
            placeholder="機材ID(自動入力)"
            value={product ? product.id : ''}
            disabled
          />
          <select
            className="nk nk_select"
            value={form.genre}
            onChange={(e) => setForm({ ...form, genre: e.target.value })}
          >
            <option value="">ジャンルを選択してください</option>
            <option value="broadcast">放送配信</option>
            <option value="pa">会場音響</option>
            <option value="venue-supplies">会場整備</option>
            <option value="pr">広報</option>
            <option value="oa">事務</option>
            <option value="transpotation">運搬用品</option>
            <option value="other">その他</option>
          </select>
          <select
            className="nk nk_select"
            value={form.prefix}
            onChange={(e) => setForm({ ...form, prefix: e.target.value })}
          >
            <option value="">備品の管理者を選択してください</option>
            <option value="NP">NP : N-Point 本部(主犯)</option>
            <option value="TN">TN : Tearai Net(tearaikazuki)</option>
            <option value="UN">UN : 嬉野ネットワークサービス(notoken)</option>
            <option value="NW">NW : ねいろわーく(染宮ねいろ)</option>
            <option value="MN">MN : 三村ネットワークサービス(Latte)</option>
            <option value="AG">AG : アジェンダチーム(えりおるん)</option>
            <option value="MA">MA : にぐとめあれ</option>
            <option value="AJ">AJ : アジョッタ</option>
          </select>
          <input
            type="text"
            className="nk nk_input"
            placeholder="製品名"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            className="nk nk_input"
            placeholder="メーカー"
            value={form.maker}
            onChange={(e) => setForm({ ...form, maker: e.target.value })}
          />
          <input
            type="text"
            className="nk nk_input"
            placeholder="シリアルナンバー"
            value={form.serialNumber}
            onChange={(e) => setForm({ ...form, serialNumber: e.target.value })}
          />
          <input
            type="text"
            className="nk nk_input"
            placeholder="付属品"
            value={form.accessories}
            onChange={(e) => setForm({ ...form, accessories: e.target.value })}
          />
          <input
            type="text"
            className="nk nk_input"
            placeholder="JANコード"
            value={form.jan}
            onChange={(e) => setForm({ ...form, jan: e.target.value })}
          />
          <input
            type="text"
            className="nk nk_input"
            placeholder="特記事項"
            onChange={(e) =>
              setForm({
                ...form,
                remarks: e.target.value,
              })
            }
          />

          <button
            type="button"
            className="nk nk_button nk_button-success"
            onClick={() => addProduct()}
          >
            登録
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
