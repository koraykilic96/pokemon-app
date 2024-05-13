import axios from 'axios';

export const getPokeballs = async (offset: number, limit: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  return response.data.results;
};

export const getPokeballDetail = async (id: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  return response.data;
};
