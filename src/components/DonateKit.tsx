import { useState, useEffect } from "react";
import type { CartItem } from "../types";

type DonateKitProps = {
  icon: string;
  name: string;
  description: string;
  price: number;
  onAddToCart: (kit: CartItem) => void;
  isInCart: boolean;
  onRemoveFromCart: (name: string) => void;
};

function DonateKit({
  icon,
  name,
  description,
  price,
  onAddToCart,
  isInCart,
  onRemoveFromCart,
}: DonateKitProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex flex-col h-full gap-2 bg-stone-900 border border-stone-800 rounded-lg p-6 text-center cursor-pointer select-none"
      >
        <p className="text-5xl mb-4">{icon}</p>
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-stone-400 flex-grow">{description}</p>
        <p className="text-orange-500 text-2xl font-black">{price} ₽</p>
        {isInCart ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFromCart(name);
            }}
            className="mt-auto border border-stone-700 bg-stone-900 hover:bg-stone-600 text-white font-semibold px-6 py-3 rounded transition cursor-pointer"
          >
            Убрать из корзины
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart({ icon, name, price });
            }}
            className="mt-auto border border-stone-700 hover:bg-stone-800 hover:border-stone-500 text-white font-semibold px-6 py-3 rounded transition cursor-pointer"
          >
            В корзину
          </button>
        )}
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
        >
          <div
            className="bg-stone-900 border border-stone-800 rounded-lg p-6 max-w-md w-full mx-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{name}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-white text-2xl cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default DonateKit;
