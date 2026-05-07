import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import type { CartItem } from "./types";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Shop from "./pages/Shop";
import Rules from "./pages/Rules";

function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(kit: CartItem) {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === kit.name);
      if (existing) return prev;
      return [...prev, kit];
    });
  }

  function removeFromCart(name: string) {
    setCart((prev) => prev.filter((item) => item.name !== name));
  }

  return (
    <>
      <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              cart={cart}
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
            />
          }
        />
        <Route path="/rules" element={<Rules />} />
      </Routes>
      <Footer />
      <Cart
        items={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />
    </>
  );
}

export default App;
