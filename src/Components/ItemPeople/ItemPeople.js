import React from 'react';
import './itemPeople.css';

const ItemPeople = ({ people }) => (
  <div className="name-people">{people.name}</div>
);

export default ItemPeople;
