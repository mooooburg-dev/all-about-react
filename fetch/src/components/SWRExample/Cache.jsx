import React from 'react';
import { SWRConfig, useSWRConfig } from 'swr';
import { Avatar } from './Profile';

export default function Cache() {
  return (
    <SWRConfig value={{ refreshInterval: 1000 }}>
      <Page />
    </SWRConfig>
  );
}

const Page = () => {
  const { mutate } = useSWRConfig();

  return (
    <div>
      <Avatar id={1212} />
      <button
        onClick={() => {
          mutate('/api/user/1212');
        }}
      >
        check
      </button>
    </div>
  );
};
