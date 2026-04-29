import DonateKit from "./DonateKit";

const kitList = [
  {
    icon: "⛏️",
    name: "Rider",
    description: "Всегда нужно с чего-то начинать!",
    price: 49.99,
  },
  {
    icon: "🛡️",
    name: "Boss",
    description: "Cтань настоящим боссом нашего сервера!",
    price: 124.99,
  },
  {
    icon: "🔥",
    name: "Elit",
    description: "Идеальная привелегия для опытных игроков.",
    price: 299.99,
  },
  {
    icon: "⚔️",
    name: "Magnat",
    description: "Покажи всему серверу на сколько ты силён!",
    price: 499.99,
  },
];

function DonateKits() {
  return (
    <section className="bg-stone-950 px-6 py-20">
      <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight text-center">
        Донат - киты
      </h2>

      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kitList.map((kit) => (
          <DonateKit
            key={kit.name}
            icon={kit.icon}
            name={kit.name}
            description={kit.description}
            price={kit.price}
          />
        ))}
      </div>
    </section>
  );
}

export default DonateKits;
