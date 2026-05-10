import React, { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://product-service:8080/products")
      .then(res => res.json())
      .then(data => setProducts(data));

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>E-Commerce Platform</h1>

      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <p>
            {product.name} - ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;