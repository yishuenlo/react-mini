const pokedex = [
  {
    starter: 1,
    region: "kanto",
    evo: [
      {
        id: 1,
        name: "Bulbasaur",
        description:
          "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      },
      {
        id: 1,
        name: "Ivysaur",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
      },
      {
        id: 1,
        name: "Venusaur",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
      },
    ],
  },
  {
    starter: 2,
    region: "kanto",
    evo: [
      {
        id: 2,
        name: "Charmander",
        description:
          "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      },
      {
        id: 2,
        name: "Charmeleon",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
      },
      {
        id: 2,
        name: "Charizard",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
      },
    ],
  },
  {
    starter: 3,
    region: "kanto",
    evo: [
      {
        id: 3,
        name: "Squirtle",
        description:
          "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      },
      {
        id: 3,
        name: "Wartortle",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
      },
      {
        id: 3,
        name: "Balstoise",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png",
      },
    ],
  },
  {
    starter: 1,
    region: "johto",
    evo: [
      {
        id: 4,
        name: "Chikorita",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png",
      },
      {
        id: 4,
        name: "Bayleef",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/153.png",
      },
      {
        id: 4,
        name: "Meganium",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/154.png",
      },
    ],
  },
  {
    starter: 2,
    region: "johto",
    evo: [
      {
        id: 5,
        name: "Cyndaquil",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/155.png",
      },
      {
        id: 5,
        name: "Quilava",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/156.png",
      },
      {
        id: 5,
        name: "Typhlosion",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/157.png",
      },
    ],
  },
  {
    starter: 3,
    region: "johto",
    evo: [
      {
        id: 6,
        name: "Totodile",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png",
      },
      {
        id: 6,
        name: "Croconaw",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/159.png",
      },
      {
        id: 6,
        name: "Feraligatr",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/160.png",
      },
    ],
  },
  {
    starter: 1,
    region: "hoenn",
    evo: [
      {
        id: 7,
        name: "Treecko",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/252.png",
      },
      {
        id: 7,
        name: "Grovyle",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/253.png",
      },
      {
        id: 7,
        name: "Sceptile",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/254.png",
      },
    ],
  },
  {
    starter: 2,
    region: "hoenn",
    evo: [
      {
        id: 8,
        name: "Torchic",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/255.png",
      },
      {
        id: 8,
        name: "Combusken",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/256.png",
      },
      {
        id: 8,
        name: "Blaziken",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/257.png",
      },
    ],
  },
  {
    starter: 3,
    region: "hoenn",
    evo: [
      {
        id: 9,
        name: "Mudkip",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/258.png",
      },
      {
        id: 9,
        name: "Marshtomp",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/259.png",
      },
      {
        id: 9,
        name: "Swampert",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/260.png",
      },
    ],
  },
  {
    starter: 1,
    region: "sinnoh",
    evo: [
      {
        id: 10,
        name: "Turtwig",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/387.png",
      },
      {
        id: 10,
        name: "Grotle",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/388.png",
      },
      {
        id: 10,
        name: "Torterra",
        type: "Grass",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/389.png",
      },
    ],
  },
  {
    starter: 2,
    region: "sinnoh",
    evo: [
      {
        id: 11,
        name: "Chimchar",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/390.png",
      },
      {
        id: 11,
        name: "Monferno",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/391.png",
      },
      {
        id: 11,
        name: "Infernape",
        type: "Fire",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/392.png",
      },
    ],
  },
  {
    starter: 3,
    region: "sinnoh",
    evo: [
      {
        id: 12,
        name: "Piplup",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/393.png",
      },
      {
        id: 12,
        name: "Prinplup",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/394.png",
      },
      {
        id: 12,
        name: "Empoleon",
        type: "Water",
        imgurl:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/395.png",
      },
    ],
  },
];

export default pokedex;