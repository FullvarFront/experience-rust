type HeaderProps = {
  cartCount: number;
  onCartClick: () => void;
};

function Header({ cartCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur border-b border-stone-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white font-black text-xl tracking-tight">
          RUST EXPERIENCE
        </div>

        <button
          onClick={onCartClick}
          className="relative text-white text-2xl cursor-pointer hover:text-orange-500 transition"
        >
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
