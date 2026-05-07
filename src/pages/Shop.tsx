import { kits } from "../data/kits";
import DonateKit from "../components/DonateKit";
import type { CartItem } from "../types";

type ShopProps = {
  cart: CartItem[];
  onAddToCart: (kit: CartItem) => void;
  onRemoveFromCart: (name: string) => void;
};

function Shop({ cart, onAddToCart, onRemoveFromCart }: ShopProps) {
  return (
    <section className="bg-stone-950 min-h-screen px-6 py-20">
      <h1 className="text-white text-4xl font-black text-center">Каталог</h1>
      <div className="gap-6 mx-auto mt-12 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {kits.map((kit) => {
          const isInCart = cart.some((item) => item.name === kit.name);
          return (
            <DonateKit
              key={kit.name}
              icon={kit.icon}
              name={kit.name}
              description={kit.description}
              price={kit.price}
              onAddToCart={onAddToCart}
              isInCart={isInCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Shop;
