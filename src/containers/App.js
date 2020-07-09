import React, { Component } from "react";
import "./App.css";
import CharacterGenerator from "../scenes/inputOutput/CharacterGenerator";
import StarterPokemon from "../scenes/StarterPokemon/StarterPokemon";

class App extends Component {
  render() {
    return (
      <main className="App">
        {/* <CharacterGenerator /> */}
        <StarterPokemon />
      </main>
    );
  }
}

export default App;
