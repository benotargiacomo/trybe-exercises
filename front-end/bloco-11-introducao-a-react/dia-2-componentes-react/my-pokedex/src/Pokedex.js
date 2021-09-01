import React from 'react';
import data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        {data.map(e => <Pokemon key={e.id} pokemon={e} />)}
      </div>
    )
  }
}

export default Pokedex;