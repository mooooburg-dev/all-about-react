import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

export default function Profile() {
  const { data, error } = useSWR('/api/user/123', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // 데이터 렌더링
  return <div>hello {data.name}!</div>;
}
