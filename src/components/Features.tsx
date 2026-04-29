import Feature from "./Feature";

const features = [
  {
    title: "Античит",
    description:
      "Античит обновляется каждую неделю - играй честно или система вычислит тебя в краткие сроки.",
  },
  {
    title: "Вайп каждую неделю",
    description: "Cвежий старт, новые рейды, никакого постоянства.",
  },
  {
    title: "Кастомные киты",
    description:
      "Адекватные кастомные киты, которые помогут в развитии и не превратят игру в дизбаланс.",
  },
  {
    title: "Активная администрация",
    description: "Быстрый рассмотр жалоб, помощь игрокам 12 часов в сутки!",
  },
];

function Features() {
  return (
    <section className="bg-stone-950 px-6 py-20">
      <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight text-center">
        Почему мы?
      </h2>
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Feature
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
