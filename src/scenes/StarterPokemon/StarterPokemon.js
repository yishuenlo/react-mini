import React, { Component } from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import "./StarterPokemon.css";
import pokedex from "./pokedex";

const initialState = pokedex.map((pokemon) => pokemon.evo[0]);
const colors = {
  grass: "#9CCC65",
  fire: "#E57373",
  water: "#64B5F6",
};

class StarterPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starterPokemons: initialState,
      scene: "pokedex",
    };
  }

  resetHandler = () => {
    this.setState({
      starterPokemons: initialState,
      scene: "pokedex",
    });
  };

  findStarterHandler = () => {
    const random = Math.floor(Math.random() * initialState.length);
    this.setState({
      starterPokemons: [initialState[random]],
      scene: "yourStarter",
    });
  };

  clickEvoHandler = (event) => {
    //copy of this.state
    let starterPokemons = [...this.state.starterPokemons];

    //find which object is being clicked
    const name = event.currentTarget.innerText.split(/\s+/g)[0];

    for (const pokemon of pokedex) {
      //find index of clicked pokemon
      const index = pokemon.evo.findIndex((stage) => stage.name === name);

      //if index match
      if (index >= 0) {
        //find id of clicked pokemon
        const id = pokemon.evo[index].id;

        //find and replace evolved pokemon in starterPokemon
        const starterIndex = starterPokemons.findIndex(
          (starter) => starter.id === id
        );
        starterPokemons[starterIndex] =
          pokemon.evo[index + 1] || pokemon.evo[0];
      }
    }
    this.setState({
      starterPokemons: starterPokemons,
    });
  };

  render() {
    const { starterPokemons } = this.state;

    //assign color to pokemon types
    let typeColor = colors.grass;
    const assignColor = (type) => {
      switch (type) {
        case "Grass":
          typeColor = colors.grass;
          break;
        case "Fire":
          typeColor = colors.fire;
          break;
        case "Water":
          typeColor = colors.water;
          break;
      }

      return typeColor;
    };

    const pokemonList = (
      <div className="pokemon-container">
        {starterPokemons.map((pokemon) => {
          return (
            <Pokemon
              clickEvo={this.clickEvoHandler} //cycle through index, aka evolution
              key={pokemon.name + pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              imgurl={pokemon.imgurl}
              typeColor={assignColor(pokemon.type)}
            />
          );
        })}
      </div>
    );

    return (
      <div className="pokemon-app">
        <h1>Starter Pokemons</h1>
        <p>Click on pokemon to watch it evolve!</p>
        <button onClick={this.resetHandler}>Reset Pokemon</button>
        <button onClick={this.findStarterHandler}>
          Find Your Starter Pokemon!
        </button>
        {pokemonList}
      </div>
    );
  }
}

export default StarterPokemon;
