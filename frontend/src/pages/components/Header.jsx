import React, { useState } from 'react';

const Header = () => {
  return (
    <>
      <div className=" text-black absolute top-10 left-10 w-full"> 
        <h1> SweetScout </h1>
      </div>
      <div className=" text-black absolute top-10 w-full">
        <ul className="list-none m-0 text-right gap-4">
          <li className="inline-block mr-20"><a href="/" className="text-black hover:text-gray-300">Home</a></li>
          <li className="inline-block mr-20"><a href="/orders" className="text-black hover:text-gray-300">My Orders</a></li>
          <li className="inline-block mr-20"><a href="/random" className="text-black hover:text-gray-300">Randomizer</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
