import React from 'react';

import { Character } from '../character/character.component';

import './character-list.styles.css';

export const CharacterList = props => (
  <div className='character-list'>
    {
      props.characters.map(character => (
        <Character key={character.id} character={character} />
      ))
    }
  </div>
);