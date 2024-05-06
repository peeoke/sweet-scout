import React, { useState } from 'react';
import RandomButton from "./components/RandomButton"
import Place from './components/Place';

function Random() {
  const [rplace, setPlace] = useState(null)
  const handleClick = async () => {
    try {
      const response = await fetch('/randomizer');
      const randomPlace = await response.json()
      setPlace(randomPlace);
    } catch(error) {
      console.error('Error fetching data:', error);      
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="p-4">
          <RandomButton onClick={handleClick} />
        </div>
        {rplace ? (
          <div className="p-4">
            <Place place={rplace} />
          </div>
        ) : null}
      </div>
    </div>
  );  
}

export default Random
