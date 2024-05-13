import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemonList = response.data.results;
    res.status(200).json(pokemonList);
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
