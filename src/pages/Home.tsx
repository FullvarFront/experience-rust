import Hero from "../components/Hero";
import Features from "../components/Features";
import DonateKits from "../components/DonateKits";
import NextWipe from "../components/NextWipe";
import Faq from "../components/Faq";
import type { CartItem } from "../types";

type HomeProps = {
  cart: CartItem[];
  onAddToCart: (kit: CartItem) => void;
  onRemoveFromCart: (name: string) => void;
};

function Home({ cart, onAddToCart, onRemoveFromCart }: HomeProps) {
  return (
    <>
      <Hero />
      <Features />
      <DonateKits
        cart={cart}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
      <NextWipe />
      <Faq />
    </>
  );
}

export default Home;
