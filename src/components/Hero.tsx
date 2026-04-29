function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-950 px-6 py-20 flex flex-col items-center justify-center text-center">
      <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
        the best server rust in Minecraft
      </p>
      <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
        RUST EXPERIENCE
      </h1>
      <p className="text-stone-400 text-lg mt-4 max-w-xl">Rust in Minecraft</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="bg-orange-700 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition cursor-pointer">
          Connect
        </button>
        <button className="border border-stone-700 hover:bg-stone-900 hover:border-stone-500 text-white font-semibold px-6 py-3 rounded transition cursor-pointer">
          Donate
        </button>
      </div>
    </section>
  );
}

export default Hero;
