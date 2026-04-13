import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navebar from './component/Navebar'
import Manage from './component/Manage'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navebar />
     <Manage/>
     <Footer/>

    </>
  )
}
export default App
