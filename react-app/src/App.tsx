import React, { useEffect } from 'react'
import { NavBar, AboutMe, Experiences, Skills, Projects } from './components'

const App = () => {
  // scroll to sections when the hash changes
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [window.location.hash])

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <NavBar />
      <div className="mx-auto grid grid-cols-1 overflow-auto w-full py-24 px-8 max-w-7xl h-fit gap-y-6">
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="experiences">
          <Experiences />
        </section>
        <section id="abilities">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </div>
  )
}

export default App
