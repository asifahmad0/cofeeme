import React, { useState } from 'react'
import Hero from './componant/Hero'
import Services from './componant/Services'
import Banner from './componant/Banner'
import AppStore from './componant/AppStore'
import Testimonials from './componant/Testimonials'
import Footer from './componant/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

  

function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' overflow-x-hidden'>
      
      <Hero/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Testimonials/>
      <Footer/>

     </div>
    </>
  )
}

export default App
