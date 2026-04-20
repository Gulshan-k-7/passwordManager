import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navebar from './component/Navebar'
import Manage from './component/Manage'
<<<<<<< HEAD
import Footer from './component/footer'
=======
import Footer from './component/Footer'
>>>>>>> 9db2821 (final call)

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <>
    
      <Navebar />
     <Manage/>
     <Footer/>

    </>
=======
   <>
  <div className='flex flex-col min-h-screen'>

    <Navebar />

    {/* 👇 This is the fix */}
    <div className=" flex-grow pt-12">
      <Manage />
      {/* <div>helo</div> */}
    </div>

    <Footer />

  </div>
</>
>>>>>>> 9db2821 (final call)
  )
}
export default App
