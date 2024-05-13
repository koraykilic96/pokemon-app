// pages/index.tsx
'use client'

import './globals.css';
import PokeballList from './pages/components/PokeballList';

const Home: React.FC = () => {
  return (
    <div>
      <PokeballList />
    </div>
  );
};

export default Home;
