/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGet from '../../../hooks/useGet';
import ItemPeople from '../../ItemPeople';
import Loading from '../../Loading/Loading';
import Paginate from '../../Paginate';
import { PeopleDetailsContext } from '../../../context/peopleDetails';
import './home.css';

const Home = () => {
  const { setPeople } = React.useContext(PeopleDetailsContext);
  const [page, setPage] = useState('?page=1');

  const [data, fetching] = useGet(page);

  const handlePages = (url) => {
    setPage(`?${url}`);
  };

  if (fetching) return <Loading />;
  return (
    <>
      <div className="Container-people">
        {data.results.map((people, index) => (
          <Link
            to="details"
            className="link-people"
            onClick={() => {
              setPeople(people);
            }}
            key={index}
          >
            <ItemPeople people={people} />
          </Link>
        ))}
      </div>
      <Paginate
        next={data.next}
        previous={data.previous}
        handlePages={handlePages}
      />
    </>
  );
};

export default Home;
