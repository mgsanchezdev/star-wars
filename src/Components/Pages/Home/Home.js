/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import useGet from '../../../hooks/useGet';
import ItemPeople from '../../ItemPeople';
import { PeopleDetailsContext } from '../../../context/peopleDetails';
import './home.css';

const Home = () => {
  const { setPeople } = React.useContext(PeopleDetailsContext);
  const [data, fetching, error] = useGet();
  if (fetching || error) return null;
  return (
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
  );
};

export default Home;
