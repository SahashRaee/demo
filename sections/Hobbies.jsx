import hobbies from '../data/hobbies'

const Hobbies = () => {
  return (
    <section id="hobbies" className="min-h-screen px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Hobbies & Interests</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-purple-500/20 transition">
              <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
              <p className="text-gray-300">{hobby.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies
