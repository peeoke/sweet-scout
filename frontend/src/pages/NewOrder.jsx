import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewOrder() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    price: '',
    details: ''
  });

  // Handler function to update form data
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler function to submit form data
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    // Clear form after submission
    setFormData({
      name: '',
      place: '',
      price: '',
      details: ''
    });
    navigate('/orders')
  };

  return (
    <div className="mt-40"> 
        <form onSubmit={handleSubmit} className=" max-w-5xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-4"> 
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter a name"
                />
            </div>

        <div className="mb-4">
            <label htmlFor="place" className="block text-gray-700 font-bold mb-2">Place:</label>
                <input
                    type="text"
                    id="place"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter the place"
                />
        </div>

        <div className="mb-4"> 
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
                <input
                id="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the price"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="details" className="block text-gray-700 font-bold mb-2">Details:</label>
                <input
                    id="text"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter any details (sweetness, ice level, etc)"
                />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </form>
    </div>
  );
}

export default NewOrder;
