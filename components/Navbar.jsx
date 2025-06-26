import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-black bg-opacity-80 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Sahash</h1>
        <div className="space-x-6 text-white text-sm">
          <a href="#hero" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
          <a href="#hobbies" className="hover:text-blue-500 transition">Hobbies</a>
          <a href="#entertainment" className="hover:text-blue-500 transition">Entertainment</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
