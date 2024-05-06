import React, { useEffect, useState } from 'react';
import PlusSign from "./components/PlusSign";
import Search from "./components/Search"
import Order from "./components/Order"
import { useNavigate } from 'react-router-dom';

function Orders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState(null)
  useEffect(() => {
    const getOrders = async () => {
    try {
      const response = await fetch('/orders');
      const orders = await response.json()
      setOrders(orders);
    } catch(error) {
      console.error('Error fetching data:', error);      
    }
  };
      getOrders();
  }, []);
  
  const handleSearch = async (query) => {
    fetch('/order-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    const response = await fetch('/order-search-result');
    const filtered_orders = await response.json()
    setOrders(filtered_orders);
    navigate("/orders")
  };
    
  const handleClick = (query) => {
    navigate("/new-order")
  };

  return (
    <>
      <div className="flex p-4 m-20 gap-2"> 
        <Search onSearch={handleSearch} />
        <PlusSign onClick={handleClick}/>
      </div>
      <div className="p-4 m-20">
      {orders?.map((order, index) => (
        <Order key={index} order={order} />
      ))}
    </div>
    </>
  )
}

export default Orders