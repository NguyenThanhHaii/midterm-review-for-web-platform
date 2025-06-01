import React from "react";
import { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts([...products, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
  };

  const updateStatus = (id) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Còn hàng" ? "Hết hàng" : "Còn hàng" }
          : p
      )
    );
    localStorage.setItem("products", JSON.stringify(products));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    localStorage.setItem(
      "products",
      JSON.stringify(products.filter((p) => p.id !== id))
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Quản Lý Sản Phẩm</h1>
      <ProductForm onAddProduct={addProduct} />
      <ProductList
        products={products}
        onUpdateStatus={updateStatus}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default App;
