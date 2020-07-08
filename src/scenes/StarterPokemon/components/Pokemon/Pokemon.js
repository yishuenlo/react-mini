import React from 'react';
import './Pokemon.css';

const Pokemon = ({ name, type, imgurl, clickEvo, typeColor }) => {
  const typeStyle = {
    backgroundColor: typeColor,
  };

  return (
    <div className="pokemon-card" onClick={clickEvo}>
      <div className="image-container">
        {/* <p>&lt;&lt;</p> */}
        <img src={imgurl} alt={name} />
        {/* <p>&gt;&gt;</p> */}
      </div>

      <h2>{name}</h2>
      <p className="pokemon-type" style={typeStyle}>{type}</p>
    </div>
  );
};

export default Pokemon;

