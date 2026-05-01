function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-white text-2xl font-black tracking-tight">
              RUST EXPERIENCE
            </h3>

            <p className="text-orange-500 font-semibold mt-4">
              play.rust-experience.ru
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Информация</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Правила
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Оферта
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-3">Сообщество</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  VK
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-6 text-stone-500 text-sm text-center">
          © {new Date().getFullYear()} Rust Experience.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
