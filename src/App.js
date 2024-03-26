import React from 'react'
import { Summary } from './components/Summary'
import { SupportResistence } from './components/SupportResistence'
import { MovingAverages } from './components/MovingAverages'
import { Oscillators } from './components/Oscillators'

function App(){
  return (
<div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 p-4">
        <Summary />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <MovingAverages />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <SupportResistence />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <Oscillators />
      </div>
    </div>
  )
}

export default App