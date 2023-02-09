import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { Intro } from './components/intro/Intro'
import ProjectList from './components/projectsList/ProjectList'

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default App