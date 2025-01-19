import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonGradient from './assets/svg/ButtonGradient'
import Button from "./components/Button"
import Header from './components/Header'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl font-bold underline'>
      Hello world!
    </h1>
    <div className='pt-[4.75rem] lg:pt-[5.25rem overflow-hidden ' >
      <Header/>
      <Hero/>
    </div>
    <div className=''><ButtonGradient/></div>
    
    </>
  )
}

export default App
