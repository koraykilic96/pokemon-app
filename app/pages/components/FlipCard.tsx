import { useState } from 'react';
import Loader from './Loader';
import ProgressBar from './ProgressBar';

const FlipCard = ({title, image, details } : any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    console.log(isFlipped)
  };

  return (
    <div className="w-72 h-120 relative perspective mx-auto">
        
        {!isFlipped &&

      <div
        className={`w-full h-full absolute top-0 left-0 transition-transform transform-gpu ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-white shadow-md rounded-md px-4 py-6 flex flex-col justify-between">
          <h2 className="text-lg font-bold text-black text-center">{title}</h2>
          {image &&
          <img src={image} alt={title} className="w-full object-cover mb-4" /> ||
          <Loader></Loader>
          }
          <button onClick={flipCard} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Detayları Göster
          </button>
        </div>
      </div>}
      {isFlipped &&
      <div
        className={`w-full h-full absolute top-0 left-0 shadow-md text-black bg-white rounded-md px-4 py-6 flex flex-col justify-between backface-hidden ${
          isFlipped ? '' : 'rotate-y-180'
        }`}
      >
        <div className='flex justify-center flex-col items-center gap-2'>
            <h1>Elements</h1>
            <div className='flex justify-center items-center gap-2'>
                {details.types.map((item: any) =>(
                <div key={item.id}>
                    <img className={'element ' + item.type.name}/>
                </div>
            ))}</div>
        </div>
        <div className='flex flex-col gap-2'>
            <ul className="grid grid-cols-2 items-center">
                <li>Weight</li>
                <li className='text-right'>{details.weight}</li>
            </ul>
            <ul className="grid grid-cols-2 items-center">
                <li>Height</li>
                <li className='text-right'>{details.height}</li>
            </ul>
            {details.stats.map((item: any) =>(
            <ul key={item.id} className="grid grid-cols-2 items-center">
                <li className='capitalize'>{item.stat.name.replaceAll('-',' ')}</li>
                <li>
                    <ProgressBar percent={item.base_stat}/>
                </li>
            </ul>
        ))}</div>
        <button onClick={flipCard} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Geri</button>
      </div>}
    </div>
  );
};

export default FlipCard;
