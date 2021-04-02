import React from 'react';
import { PeopleDetailsContext } from '../../context/peopleDetails';
import './itemDetailPeople.css';

const ItemDetailPeople = () => {
  const { people } = React.useContext(PeopleDetailsContext);
  return (
    <div className="container-detail-people">
      <h1>Nombre: {people?.name}</h1>
      <h2>Altura: {people?.height}</h2>
      <h2>Color de ojos: {people?.eye_color}</h2>
      <h2>Fecha nacimiento: {people?.birth_year}</h2>
      <h2>Género: {people?.gender}</h2>
      <h2>Color de pelo: {people?.hair_color}</h2>
      <h2>Color de piel: {people?.skin_color}</h2>
      <h2>Masa: {people?.mass}</h2>
    </div>
  );
};

export default ItemDetailPeople;
