import React, { useState, useEffect } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });


  const categories = ["All", ...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
          React <span className="text-blue-600">Filter & Map</span> Store
        </h1>


        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

      
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

  
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 text-gray-500 font-medium">
            No products found matching your criteria. 😢
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image */}
                  <div className="w-full h-48 bg-gray-50 rounded-xl mb-4 overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Category Tag */}
                  <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">
                    {product.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-sm font-bold text-gray-800 mt-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {product.title}
                  </h2>
                </div>

                {/* Price & Rating */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-lg font-black text-gray-900">${product.price}</span>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
                    <span className="text-yellow-500 text-xs">⭐</span>
                    <span className="text-xs font-bold text-yellow-700">{product.rating?.rate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}