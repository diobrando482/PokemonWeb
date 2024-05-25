import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination/Pagination'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { fetchPokemons } from '../../api/fetchPokemons'

const MainPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const limit = 10;

  useEffect(() => {
    setIsLoading(true);
    fetchPokemons(limit, offset)
      .then((pokeList) => {
        setPokemonList(pokeList.results);
        const count = Math.ceil(pokeList.count / limit);
        setPageCount(count);
        setIsLoading(false);
      });
  }, [offset]);

  const handleNext = () => {
    if (page === pageCount) return;
    setPage(prevState => prevState += 1);
    setOffset(prev => prev += limit);
  }

  const handlePrev = () => {
    if (page === 1) return;
    setPage(prevState => prevState -= 1);
    setOffset(prev => prev -= limit);
  }

  return (
    <div>
      <Pagination
        pageCount={pageCount}
        page={page}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <div className="pokemonList">
        {pokemonList.length > 0 ? (
          pokemonList.map(pokemon =>
            <Link to={`/${pokemon.name}`} key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          )
        ) : (
          isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>No Pokémon Found</div>
          )
        )}
      </div>
    </div>
  )
}

export default MainPage;
