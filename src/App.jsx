import React from 'react'
import ParticlesOne from './components/ParticlesOne'
import ParticlesTwo from './components/ParticlesTwo'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <main className='max-w-6xl mx-auto py-32'>
        <Hero />
      </main>

      <ParticlesOne />
      <ParticlesTwo />
    </>
  )
}

export default App