import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetail = () => {
  const router = useRouter();
  const { name } = router.query;
  const [pokemonName, setPokemonName] = useState('');

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemonName(response.data.name);
      } catch (error) {
        console.error('Error fetching Pokemon detail:', error);
      }
    };

    if (name) {
      fetchPokemonDetail();
    }
  }, [name]);

  return (
    <div>
      <h1>Pokemon Detail</h1>
      <p>Name: {pokemonName}</p>
    </div>
  );
};

export default PokemonDetail;
