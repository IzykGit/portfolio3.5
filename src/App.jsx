import React from 'react'
import ParticlesOne from './components/ParticlesOne'
import ParticlesTwo from './components/ParticlesTwo'
import Hero from './components/Hero'
import About from './components/About'
import Sources from './components/Sources'
import Tech from './components/Tech'

const App = () => {
  return (
    <>
      <ParticlesOne />
      <ParticlesTwo />

      <main className='max-w-5xl mx-auto py-32 px-6 flex flex-col gap-8 z-10 relative'>
        <Hero />
        <About />
        <Sources />
        <Tech />
      </main>

    </>
  )
}

export default App