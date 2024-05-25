import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPokemonByNumber } from '../../api/fetchPokemons';

const PokemonInfo = () => {
  const location = useLocation();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const number = location.pathname.split('/')[1]; // Получаем номер покемона из пути URL
    fetchPokemonByNumber(number).then((data) => {
      setPokemon(data);
    });
  }, [location.pathname]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className='infoPokemon'>
      <div className='img_pokemon'><img src={pokemon.sprites.front_default} alt={pokemon.name} /></div>
      <div>
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Abilities:</p>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default PokemonInfo;