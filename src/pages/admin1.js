import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', priority: 1 },
    { id: 2, name: 'Product 2', priority: 2 },
    { id: 3, name: 'Product 3', priority: 3 },
    { id: 4, name: 'Product 4', priority: 4 },
  ]);


  const handleUpClick = (product) => {
    const index = products.findIndex((p) => p.id === product.id);
    if (index > 0) {
      // Swap the priorities of the current product and the one above it
      const tempPriority = products[index - 1].priority;
      products[index - 1].priority = product.priority;
      product.priority = tempPriority;
  
      // Sort the products array by priority
      products.sort((a, b) => a.priority - b.priority);
  
      setProducts([...products]); // Update the state with the new array
    }
  };
  
  const handleDownClick = (product) => {
    const index = products.findIndex((p) => p.id === product.id);
    if (index < products.length - 1) {
      // Swap the priorities of the current product and the one below it
      const tempPriority = products[index + 1].priority;
      products[index + 1].priority = product.priority;
      product.priority = tempPriority;
  
      // Sort the products array by priority
      products.sort((a, b) => a.priority - b.priority);
  
      setProducts([...products]); // Update the state with the new array
    }
  };
  

  return (
    <div>
      {products.map((product, index) => (
        <div className="border border-gray-400 p-4">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600 mb-4">Priority: {product.priority}</p>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => { handleUpClick(product) }}
              disabled={product.priority === 1}
            >
              Up
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => { handleDownClick(product) }}
              disabled={product.priority === products.length}
            >
              Down
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList

