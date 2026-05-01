import FaqItem from "./FaqItem";

const faqList = [
  {
    question: "Как зайти на сервер?",
    answer: "IP сервера: play.rust-experience.ru, версия Minecraft 1.20.4.",
  },
  {
    question: "Как часто проходят вайпы?",
    answer: "Вайп каждую пятницу в 17:00 по МСК.",
  },
  {
    question: "Можно ли вернуть деньги за донат?",
    answer:
      "Возврат возможен в течение 14 дней при условии что кит не использовался.",
  },
  {
    question: "Что делать если забанили?",
    answer: "Подай апелляцию в нашем Discord-сервере в канале #ban-appeals.",
  },
];

function Faq() {
  return (
    <section className="bg-stone-950 px-6 py-20">
      <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight text-center">
        Частыe вопросы
      </h2>

      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {faqList.map((item) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default Faq;
