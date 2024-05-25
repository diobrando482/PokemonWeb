import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const AboutPage = () => {
  const [generations, setGenerations] = useState([]);
  const [selectedGenerations, setSelectedGenerations] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${BASE_URL}/generation`);
      setGenerations(data.results.slice(0, 8)); // только первые 8 поколений
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${BASE_URL}/pokemon`);
      setPokemons(data.results);
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (e) => {
    const generationName = e.target.name;
    if (e.target.checked) {
      setSelectedGenerations([...selectedGenerations, generationName]);
    } else {
      setSelectedGenerations(selectedGenerations.filter((gen) => gen !== generationName));
    }
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    const pokemonGeneration = pokemon.generation.url.split('/').slice(-2, -1)[0]; // получить номер поколения покемона
    return selectedGenerations.includes(pokemonGeneration);
  });

  return (
    <div>
      <h1>About Page</h1>
      <div>
        {generations.map((generation) => (
          <label key={generation.name}>
            <input
              type="checkbox"
              name={generation.url.split('/').slice(-2, -1)[0]} // получить номер поколения из URL
              checked={selectedGenerations.includes(generation.url.split('/').slice(-2, -1)[0])}
              onChange={handleCheckboxChange}
            />
            {generation.name}
          </label>
        ))}
      </div>
      <div>
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
