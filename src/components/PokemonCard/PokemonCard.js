import React, { useEffect, useState, useContext } from 'react'
import { fetchPokemonId } from 'api/fetchPokemons';
import { GlobalContext } from 'components/Context';
const PokemonCard = ({ pokemon }) => {
  const [ imgURl, setImgURL ] = useState();
// sprites.other.dream_world.front_default


const { signIn } = useContext(GlobalContext);


// useEffect(() => {
//   let interval = setInterval(() => {
//     console.log(
//       'log'
//     );
//   }, 1000)
//   return () => {
//     clearInterval(interval);
//   }
// })

useEffect(() => {
  signIn('Syimyk')
  fetchPokemonId(pokemon.url)
  .then((pokemon) => setImgURL(pokemon.sprites.other.dream_world.front_default))

  return () => {
    
  }

}, [ pokemon.url ])
  return (
    <div className='pokemonCard'>
      <h3>{pokemon.name}</h3>
      <img src={imgURl} alt="" />
    </div>
  )
}

export default PokemonCard