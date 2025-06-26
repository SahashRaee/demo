import entertainment from '../data/entertainment'

const Entertainment = () => {
  return (
    <section id="entertainment" className="min-h-screen px-6 py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Entertainment</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {entertainment.map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-yellow-400/20 transition">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Entertainment
