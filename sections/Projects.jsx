import projects from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-blue-500/20 transition">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.desc}</p>
              <div className="space-x-4">
                <a href={proj.demo} target="_blank" className="text-blue-400 underline">Demo</a>
                <a href={proj.code} target="_blank" className="text-blue-400 underline">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
