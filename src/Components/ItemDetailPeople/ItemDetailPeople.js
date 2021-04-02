import React from 'react';
import { PeopleDetailsContext } from '../../context/peopleDetails';

const ItemDetailPeople = () => {
  const { people } = React.useContext(PeopleDetailsContext);
  return (
    <div>
      <h1>Nombre: {people?.name}</h1>
      <h2>Altura: {people?.height}</h2>
      <h2>Color de Ojos: {people?.eye_color}</h2>
      <h2>Fecha nacimiento: {people?.birth_year}</h2>
      <h2>Género: {people?.gender}</h2>
      <h2>Color de pelo: {people?.hair_color}</h2>
      <h2>Color de piel: {people?.skin_color}</h2>
      <h2>Masa: {people?.mass}</h2>
    </div>
  );
};

export default ItemDetailPeople;
