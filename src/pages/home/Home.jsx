import React from 'react';
import { useGetPruductsQuery } from '../../redux/api/product.api';

const Home = () => {
  const { data, isLoading } = useGetPruductsQuery({});

  return (
    <div className='container mx-auto px-6 py-8'>
      <h1 className='text-3xl font-bold text-center text-blue-400 mb-6'>Our Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className='bg-gray-900 p-4 rounded-lg shadow-md animate-pulse'>
                <div className='w-full h-40 bg-gray-700 rounded-md mb-4'></div>
                <div className='h-4 bg-gray-700 w-3/4 mb-2 rounded'></div>
                <div className='h-3 bg-gray-700 w-full mb-2 rounded'></div>
                <div className='h-3 bg-gray-700 w-1/2 mb-4 rounded'></div>
                <div className='h-10 bg-gray-700 w-full rounded'></div>
              </div>
            ))
          : data?.products?.map((item) => (
              <div key={item.id} className='bg-gray-900 text-white p-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300'>
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className='w-full h-40 object-cover rounded-md mb-4' 
                />
                <h2 className='text-xl font-semibold'>{item.title}</h2>
                <p className='text-gray-400 text-sm mt-1'>{item.description}</p>
                <p className='text-blue-400 font-bold mt-2'>${item.price}</p>
                <button className='mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
                  Add to Cart
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
