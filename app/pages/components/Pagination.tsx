'use client'

import { useState } from "react";

const Pagination = () => {


    const [offset, setOffset] = useState(0);
    const limit = 10;
    
    const handleNextPage = () => {
        setOffset(offset + limit);
    };

    const handlePrevPage = () => {
        if (offset >= limit) {
        setOffset(offset - limit);
        }
    };
  
    return (
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <button onClick={handlePrevPage}>Önceki Sayfa</button>
            <button onClick={handleNextPage}>Sonraki Sayfa</button>
        </div>
    );
};
export default Pagination;