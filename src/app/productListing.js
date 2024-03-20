"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from './productCard';

function ProductListing() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [orderBy, setOrderBy] = useState('desc'); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const fetchData = async () => {
    try {
      let url = `https://fakestoreapi.com/products?limit=${limit}&sort=${orderBy}`;
      if (selectedCategory) {
        url = `https://fakestoreapi.com/products/category/${selectedCategory}?limit=${limit}&sort=${orderBy}`;
      }
      
      const productsResponse = await axios.get(url);
      setProducts(productsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <ProductsCard
      categories={categories}
      selectedCategory={selectedCategory}
      handleCategoryChange={handleCategoryChange}
      orderBy={orderBy}
      handleOrderChange={handleOrderChange}
      limit={limit}
      setLimit={setLimit}
      products={products}
      fetchData={fetchData}
    />
  );
}

export default ProductListing;
