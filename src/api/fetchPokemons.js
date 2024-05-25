import axios from "axios";

const BASE_URL = 'https://pokeapi.co/api/v2'


export const fetchPokemons = async(limit, offset) => {
    try {
        const { data } = await axios.get(BASE_URL + `/pokemon?limit=${limit}&offset=${offset}`);
        return data;
    }catch(e) {
        console.log(e);
    }
};  



export const fetchPokemonId = async(name) => {
    try {
        const { data }  = await axios.get(name);
    return data;
     } catch (error) {
        console.log(error);
    }
};
export const fetchPokemonByNumber = async (number) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/pokemon/${number}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };