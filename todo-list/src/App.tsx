import axios from 'axios';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { atom, selector, useRecoilValue } from 'recoil';
import Calendar from './components/Calendar';

const todoIdState = atom({
  key: 'todoIdState',
  default: 1,
});

const todoItemQuery = selector({
  key: 'todoItemQuery',
  get: async ({ get }) => {
    const id = get(todoIdState);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return response.data;
  },
});

function App() {
  const data = useRecoilValue(todoItemQuery);

  return (
    <RecoilRoot>
      <Calendar />
    </RecoilRoot>
  );
}

export default App;
