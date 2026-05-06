import type { CartItem } from "../types";

type CartProps = {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (name: string) => void;
};

function Cart({ items, isOpen, onClose, onRemove }: CartProps) {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/60 z-50">
      <aside
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 right-0 h-full w-full max-w-md bg-stone-900 border-l border-stone-800 p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Корзина</h2>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white text-2xl cursor-pointer"
          >
            ✕
          </button>
        </div>
        {items.length === 0 ? (
          <p className="text-stone-400">Корзина пуста</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center bg-stone-800 rounded p-3"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white font-semibold flex-1 ml-3">
                  {item.name}
                </span>
                <span className="text-orange-500 font-bold mr-3">
                  {item.price} ₽
                </span>
                <button
                  onClick={() => onRemove(item.name)}
                  className="text-stone-400 hover:text-red-500 cursor-pointer"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <div className="mt-6 pt-6 border-t border-stone-800">
            <div className="flex justify-between text-white font-bold text-lg mb-4">
              <span>Итого:</span>
              <span className="text-orange-500">
                {items.reduce((sum, item) => sum + item.price, 0).toFixed(2)} ₽
              </span>
            </div>
            <button
              onClick={() => alert("Тут будет оплата")}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition cursor-pointer"
            >
              Купить
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Cart;
