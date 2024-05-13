'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import FlipCard from "../pages/components/FlipCard";


const PokeballDetailPage: React.FC = () => {  
  const router = useRouter();
  const pathname = usePathname()
  const pokeballName = pathname.split('/')[1]

  const [pokeball, setPokeball] = useState('');
  const [images, setImages] = useState('')

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeballName}`);
        setPokeball(response.data);
        setImages(response.data.sprites.other['official-artwork'].front_default);
        console.log(response.data.name)
      } catch (error) {
        console.error('Error fetching Pokemon detail:', error);
      }
    };

    if (pokeballName) {
      fetchPokemonDetail();
    }
  }, [pokeballName]);

  return (
    <div className="container mx-auto">
      <button onClick={router.back} className="bg-blue-700 button-back">
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
          </svg>
        </i>
        Back
      </button>
      <FlipCard
        title={pokeballName.toUpperCase()}
        image={images}
        details={pokeball}
      />
    </div>
  );
};

export default PokeballDetailPage;
