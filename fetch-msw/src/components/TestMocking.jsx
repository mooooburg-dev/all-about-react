import React, { useState } from "react";

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

const url = "https://api.sampleapis.com/coffee/hot";

export default function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.data;
      })
      .then((json) => {
        setData(json.data);
      })
      .error((error) => {
        setError(`Something Wrong: ${error}`);
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
    </div>
  );
}
