import React, { useEffect, useState } from 'react';

import Place from './components/Place';
const API_URL = '/sweets'

function Home() {

  const [data, setData] = useState(null)
    useEffect(() => {
        
    const getPlaces = async () => {
      try{
      const response = await fetch(API_URL);
      const data = await response.json()
      setData(data);
      }catch(error){
        console.error('Error fetching data:', error);      
      }
    };
        getPlaces(); // Call getPlaces function on mount
      }, []);

  return (
    <div className="p-4 m-20">
      {data?.map((place, index) => (
        <Place key={index} place={place} />
      ))}
    </div>
  )
}

export default Home