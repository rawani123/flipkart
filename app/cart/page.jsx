"use client";
import React,{useEffect, useState} from 'react'



const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Path to your data.json file in the public directory
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div>
      
    </div>
  )
}

export default Cart
