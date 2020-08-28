import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Core from './../../../libs/n-kizai';
const core = new Core();

const Index = (props) => {
  const [eventSulg, setEventSulg] = useState('');

  const history = useHistory();
  const pushHistory = (path) => history.push(path);

  const EventsSelector = (props) =>
    core.getEvents().map((event) => (
      <option key={event.slug} value={event.slug}>
        {event.name}
      </option>
    ));

  return (
    <div>
      <p>機材予約 - イベントを選択してください</p>
      <div>
        <select
          className="nk nk_select"
          value={eventSulg}
          onChange={(e) => setEventSulg(e.target.value)}
        >
          <option value="">イベントを選択してください</option>
          <EventsSelector />
        </select>
        <button
          className="nk nk_button"
          onClick={() => {
            if (!eventSulg) {
              alert('イベントを選択してください');
              return;
            }
            pushHistory(`/reservations/${eventSulg}`);
          }}
        >
          送信
        </button>
        {/* <Link
          to="/reservations/myfes2020"
          className="nk nk_button nk_button-success"
        >
          送信
        </Link> */}
      </div>
    </div>
  );
};

export default Index;
