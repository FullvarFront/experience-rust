import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DonateKits from "./components/DonateKits";
import NextWipe from "./components/NextWipe";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import type { CartItem } from "./types";
import Header from "./components/Header";
import Cart from "./components/Cart";

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
      <Hero />
      <Features />
      <DonateKits
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />
      <NextWipe />
      <Faq />
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
