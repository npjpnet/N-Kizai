import React, { useState } from 'react';

import Core from './../../../libs/n-kizai';
const core = new Core();

const Index = (props) => {
  const [eventSulg, setEventSulg] = useState('');
  const EventsSelector = (props) =>
    core
      .getEvents()
      .map((event) => <option value={event.slug}>{event.name}</option>);

  return (
    <div>
      <p>イベントを選択してください</p>
      <div>
        <select
          className="nk nk_select"
          value={eventSulg}
          onChange={(e) => setEventSulg(e.target.value)}
        >
          <option value="">イベントを選択してください</option>
          <EventsSelector />
        </select>
        <button className="nk nk_button nk_button-success">送信</button>
        {/* <Link to="/checklists/myfes2020" className="nk nk_button">
        送信
        </Link> */}
      </div>
    </div>
  );
};

export default Index;
