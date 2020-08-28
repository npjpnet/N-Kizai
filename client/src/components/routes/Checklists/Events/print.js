import React, { useState } from 'react';

import './print.scss';

const reservedItems = [
  {
    id: '1',
    code: 'NKNW-0001',
    name: '配信機材',
    remarks: '本部用',
    category: 'BROADCAST',
    status: null,
  },
  {
    id: '24',
    code: 'NKNW-0024',
    name: 'カメラ',
    remarks: '本部用',
    category: 'OFFICE',
    status: null,
  },
  {
    id: '43',
    code: 'NW-0002',
    name: 'パソコン',
    remarks: '配信用',
    category: 'BROADCAST',
    status: null,
  },
  {
    id: '54',
    code: 'NP-0001',
    name: 'ミキサ',
    remarks: '配信用',
    category: 'BROADCAST',
    status: null,
  },
  {
    id: '5',
    code: 'NKNW-0005',
    name: 'LANケーブル',
    remarks: '配信用',
    category: 'BROADCAST',
    status: null,
  },
  {
    id: '164',
    code: 'NKNP-0006',
    name: 'フォンケーブル',
    remarks: '配信用',
    category: 'BROADCAST',
    status: null,
  },
];

const Index = (props) => {
  const [items /*, setItems */] = useState(reservedItems);

  return (
    <div className="print">
      <h2>マイフェス2020 機材リスト</h2>
      <table className="print_table">
        <thead>
          <tr>
            <th></th>
            <th>個体ID</th>
            <th>名前</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.code}>
              <td class="print_table_check">□</td>
              <td>{i.code}</td>
              <td>{i.name}</td>
              <td>{i.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
