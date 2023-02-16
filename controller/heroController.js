let heroes = require("../superhero.json");
const express = require("express");
const app = express();
app.use(express.json());

const getHero = (id) => {
  const hero = heroes.filter((hero) => hero.id === id);
  return hero;
};

//All superheroes GET
const getAllHeroes = async (req, res) => {
  await res.status(200).json(heroes);
};

//Single superhero GET
const getSingleHero = async (req, res) => {
  const id = parseInt(req.params.id);
  const hero = getHero(id);

  if (hero.length < 1) {
    await res.status(404).json();
  }
  await res.status(200).json(hero[0]);
};

//Create a superhero POST
const createHero = async (req, res) => {
  const info = req.body; // viene del body de POSTMAN, en raw y formato JSON.
  const heroesIds = heroes.map((hero) => hero.id);
  const id = Math.max.apply(Math, heroesIds) + 1;
  const newHero = {
    id: id,
    name: info["name"],
    publisher: info["publisher"],
    alter_ego: info["alter_ego"],
    first_appearance: info["first_appearance"],
    image: info["image"],
    characters: info["characters"],
  };
  heroes.push(newHero);
  await res.status(201).json(newHero);
};

//Edit superhero PATCH

const editHero = async (req, res) => {
  let info = req.body;
  const id = parseInt(req.params.id);
  let currentHero = getHero(id);

  if (currentHero.length < 1) {
    res.status(404).json();
  }
  currentHero = currentHero[0];

  if ("id" in info) {
    currentHero.id = info["id"];
  }

  if ("name" in info) {
    currentHero.name = info["name"];
  }

  if ("publisher" in info) {
    currentHero.publisher = info["publisher"];
  }

  if ("first_appearance" in info) {
    currentHero.first_appearance = info["first_appearance"];
  }

  if ("characters" in info) {
    currentHero.characters = info["characters"];
  }

  if ("image" in info) {
    currentHero.image = info["image"];
  }

  heroes = heroes.filter((hero) => hero.id !== currentHero.id);
  heroes.push(currentHero);
  await res.status(200).json(currentHero);
};

//Delete superhero DELETE
const deleteHero = async (req, res) => {
  const id = parseInt(req.params.id);
  const hero = getHero(id);

  if (hero.length < 1) {
    await res.status(404).json();
  }

  heroes = heroes.filter((hero) => hero.id !== id);
  await res.status(204).json();
};

module.exports = {
  getAllHeroes,
  getSingleHero,
  createHero,
  editHero,
  deleteHero,
};
