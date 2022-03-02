import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { throttle } from 'throttle-debounce';
import './index.css';

interface Airline {
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

function App() {
  const listRef = useRef<HTMLUListElement>(null);
  const currentPageRef = useRef<number>(0);

  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

  const getPassengers = async (init?: boolean) => {
    const params = { page: currentPageRef.current, size: 100 };

    try {
      const response = await axios.get(
        'https://api.instantwebtools.net/v1/passenger',
        { params }
      );

      const isLast = response.data.totalPages === currentPageRef.current;

      init
        ? setPassengers(response.data.data)
        : setPassengers(passengers.concat(response.data.data));
      // setPassengers(
      //   init ? response.data.data : passengers.concat(response.data.data)
      // );

      setIsLast(isLast);
    } catch (e) {
      console.error(e);
    }
  };

  const handleScroll = throttle(1000, () => {
    if (listRef.current) {
      const { scrollHeight, offsetHeight, scrollTop } = listRef.current;

      const offfset = 50;

      console.log('trigger');

      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offfset);
    }
  });

  useEffect(() => {
    if (isScrollBottom) {
      currentPageRef.current += 1;

      !isLast && getPassengers();
    }
  }, [isScrollBottom, isLast]);

  useEffect(() => {
    getPassengers(true);
  }, []);

  // console.log(passengers.length);
  return (
    <div className="App">
      <ul ref={listRef} className="list" onScroll={handleScroll}>
        {passengers.map((passenger) => (
          <li className="item" key={passenger._id}>
            {passenger.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
