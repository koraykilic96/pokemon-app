// components/PokeballList.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getPokeballs } from '@/app/utils/api';
import React from "react";
// import {Pagination} from "@nextui-org/pagination";

const PokeballList: React.FC = () => {
  const [pokeballs, setPokeballs] = useState<any[]>([]);
  const router = useRouter();

  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokeballs(offset, limit);
      setPokeballs(data);
    };
    fetchData();
  }, [offset]);

  const handleClick = (pokeballName: string) => {
    router.push(`/${pokeballName}`);
  };

  const handleNextPage = () => {
    setOffset(offset + limit);
  };

  const handlePrevPage = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  const handleClickPage = () => {
        handlePrevPage();
        handleNextPage();
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Pokemons</h1>
      <ul className="grid grid-cols-2 gap-4">
        {pokeballs.map((pokeball: any, index: any) => (
          <li key={index} onClick={() => handleClick(pokeball.name)} className="text-black text-center uppercase bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-300">
            {pokeball.name}
          </li>
        ))}
      {/* <Pagination showControls total={limit}  initialPage={offset} onChange={handleClickPage}/> */}
      <button onClick={handlePrevPage}>Önceki Sayfa</button>
      <button onClick={handleNextPage}>Sonraki Sayfa</button>

      </ul>
    </div>
  );
};

export default PokeballList;
