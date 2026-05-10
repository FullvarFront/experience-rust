function Rules() {
  return (
    <section className="bg-stone-950 min-h-screen px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-black text-center">
          Правила сервера
        </h1>
        <p className="text-stone-400 text-center mt-4">
          Прочитай перед игрой. Незнание правил не освобождает от наказания.
        </p>

        <div className="mt-12 flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold mb-10">
              Общие правила
            </h2>
            <ul className="flex flex-col gap-3 text-stone-300">
              <li className="flex gap-3 text-xl">
                <span className="text-orange-500 font-bold">•</span>
                <span>
                  Запрещены оскорбления, мат и провокации в адрес других
                  игроков.
                </span>
              </li>
              <li className="flex gap-3 text-xl">
                <span className="text-orange-500 font-bold">•</span>
                <span>Запрещены любые читы, баги и эксплойты.</span>
              </li>
              <li className="flex gap-3 text-xl">
                <span className="text-orange-500 font-bold">•</span>
                <span>Реклама других серверов и проектов карается баном.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Rules;
