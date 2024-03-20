import React from 'react';

function ProductCard({ 
  categories, 
  selectedCategory, 
  handleCategoryChange, 
  orderBy, 
  handleOrderChange, 
  limit, 
  setLimit, 
  products, 
  fetchData 
}) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">API STORE</h1>

      <div className="flex mb-4">
        <select className="mr-4 p-2 border rounded" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <select className="mr-4 p-2 border rounded" value={orderBy} onChange={handleOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <input className="mr-4 p-2 border rounded" type="number" value={limit} onChange={(e) => setLimit(e.target.value)} />

        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={fetchData}>Get Products</button>
      </div>
      <h1 className='text-3xl font-bold mb-4'>
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {products.map((product, index) => (
    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-600">{product.category}</p>
        <p className="mt-2 text-sm">{product.description}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default ProductCard;
