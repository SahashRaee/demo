import experience from '../data/experience'

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-blue-600/30 transition">
              <h3 className="text-xl font-semibold">{exp.role} <span className="text-blue-400">@ {exp.company}</span></h3>
              <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
