const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Hi, I’m <span className="text-blue-500">Sahash Rai</span></h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-xl">Fullstack AI Engineer | Machine Learning Engineer </p>

      <div className="mt-6 space-x-4">
        <a href="#projects" className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">View Projects</a>
        <a href="https://github.com/sahashraee" target="_blank" className="px-5 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">GitHub</a>
      </div>
    </section>
  )
}

export default Hero
