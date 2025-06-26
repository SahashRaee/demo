import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About' 
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Hobbies from '../sections/Hobbies'
import Entertainment from '../sections/Entertainment'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sahash Rai </title>
        <meta name="description" content="Sahash's personal portfolio website" />
      </Head>

      <main className="bg-black text-white scroll-smooth">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Hobbies />
        <Entertainment />
        <Contact />


      </main>
    </>
  )
}
