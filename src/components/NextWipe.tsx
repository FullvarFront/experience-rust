import { useState, useEffect } from "react";

const FRIDAY = 5;
const WIPE_HOUR = 17;

function getNextWipeDate(): Date {
  const now = new Date();
  const target = new Date(now);

  target.setHours(WIPE_HOUR, 0, 0, 0);

  let daysUntilFriday = (FRIDAY - now.getDay() + 7) % 7;

  if (daysUntilFriday === 0 && now.getTime() >= target.getTime()) {
    daysUntilFriday = 7;
  }

  target.setDate(target.getDate() + daysUntilFriday);

  return target;
}

function getTimeLeft(): string {
  const target = getNextWipeDate();
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return "00д 00ч 00м 00с";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return `${pad(days)}д ${pad(hours)}ч ${pad(minutes)}м ${pad(seconds)}с`;
}

function NextWipe() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-stone-950 px-6 py-20">
      <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight text-center">
        Следующий вайп
      </h2>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-stone-400 text-lg mb-4">До запуска нового вайпа</p>
        <div className="text-orange-500 text-5xl md:text-6xl font-black">
          {timeLeft}
        </div>
      </div>
    </section>
  );
}

export default NextWipe;
