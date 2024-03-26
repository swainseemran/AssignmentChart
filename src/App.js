import React from 'react'
import { Summary } from './components/Summary'
import { SupportResistence } from './components/SupportResistence'
import { MovingAverages } from './components/MovingAverages'
import { Oscillators } from './components/Oscillators'

function App(){
  return (
    <>
      <Summary />
      <SupportResistence />
      <MovingAverages />
      <Oscillators />
    </>
  )
}

export default App