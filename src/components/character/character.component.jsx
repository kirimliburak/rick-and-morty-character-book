import React from 'react';

import './character.styles.css';

export const Character = props => (
  <div className='character-container'>
    <img src={props.character.image} alt='character' className='character-image'></img>
    <h2>{props.character.name}</h2>
    <p>{props.character.species}</p>
  </div>
);