import React, { useEffect, useState } from "react";
import Product from "./Product";
const SearchProducts = () => {
   const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://course-api.com/react-store-products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
console.log(filteredProducts)
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Products List</h2>
          <div className="underline"></div>
        </div>
        <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
        {<Product  products={filteredProducts} />}
      </section>
    </main>
  );
}

export default SearchProducts;
