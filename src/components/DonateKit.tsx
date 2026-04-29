import { useState } from "react";

type DonateKitProps = {
  icon: string;
  name: string;
  description: string;
  price: number;
};

function DonateKit({ icon, name, description, price }: DonateKitProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex flex-col h-full gap-2 bg-stone-900 border border-stone-800 rounded-lg p-6 text-center cursor-pointer"
      >
        <p className="text-5xl mb-4">{icon}</p>
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-stone-400 flex-grow">{description}</p>
        <p className="text-orange-500 text-2xl font-black">{price} ₽</p>

        <button className="mt-auto border border-stone-700 hover:bg-stone-800 hover:border-stone-500 text-white font-semibold px-6 py-3 rounded transition cursor-pointer">
          В корзину
        </button>
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
