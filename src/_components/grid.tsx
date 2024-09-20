"use client"
import { usePathFinding } from '@/_hooks/Path_Finding_hooks';
import { MAX_ROWS } from '@/_utils/constants';
import cx from 'clsx';
import React from 'react';


export const Grid = () => {
  const {grid}= usePathFinding();
  return (
    <div
      className={`
        
          flex items-center flex-col justify-center border-2 border-black 
        
        lg:min-h-[${MAX_ROWS * 17}px]
        
         lg:min-w-[${MAX_ROWS * 15}px]
       
        
      `}
    >
        hi there 
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => (
            <div key={tileIndex} className='h-2 w-2 bg-white border' />
          ))}
        </div>
      ))}
    </div>
  );
};
