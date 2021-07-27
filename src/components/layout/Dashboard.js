import React, { Component } from 'react';

import PokemonDetails from '../pokemon/PokemonDetails';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
        <PokemonDetails />
        </div>
      </div>
    );
  }
}
