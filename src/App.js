import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css'
import Aos from 'aos';
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import Faq from './components/Faq';
import Footer from './components/Footer';
import HelpCenter from './components/HelpCenter';
import Resume from './components/Resume';
import ResumeTemplate from './components/ResumeTemplate';
import OurClients from './components/OurClients';
function App() {
  const [preloader, setPreloader] = useState(true)
  useEffect(() => {
    // let password;
    // do(password = prompt('please enter your password')
    // )
    // while(password !== 'anil kumar')
    Aos.init({ once: false, })
    setTimeout(() => {
      setPreloader(false);
      document.body.classList.remove('overflow-hidden')

    }, 3000);
    document.body.classList.add('overflow-hidden')
  }, [])
  return (
    <div className='overflow-hidden'>
      {preloader && <Preloader />}
      <BackToTop/>
      <Hero />
      <ResumeTemplate />
      <HelpCenter />
      <Resume />
      <OurClients />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
