import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/sass/style.scss";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";

function App() {
  const [products, productList] = useState([]); // Product Rendering Hook
  const [productByName, setProductName] = useState(""); // Search by Product Name Hook
  const [cartItems, setCartItems] = useState([]); // Add item in Cart Hook
  const [categories, getCategories] = useState([]); // Get All Categories Hook
  const [selectedCategory, setSelectedCategory] = useState(""); // Select Category Hook

  // Fetch products from FakeStoreApi
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => productList(data));
  }, []);

  // Fetch all categories from FakeStoreApi
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => getCategories(data));
  }, []);

  // Load cart items from localStorage on page load
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  // Add to cart functionality
  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    // Save updated cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeFromCart = (productIndex) => {
    const updatedCart = cartItems.filter((item) => item.index !== productIndex);
    setCartItems(updatedCart);
    // Save updated cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Header
        productByName={productByName}
        setProductName={setProductName}
        cartItems={cartItems}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        removeFromCart={removeFromCart}
      />
      <main>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  productByName={productByName}
                  cartItems={cartItems}
                  addToCart={addToCart}
                  selectedCategory={selectedCategory}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
