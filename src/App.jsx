import { useEffect } from 'react'
import AOS from 'aos'
import Cover from './components/Cover.jsx'
import Couple from './components/Couple.jsx'
import Story from './components/Story.jsx'
import Event from './components/Event.jsx'
import Countdown from './components/Countdown.jsx'
import Gallery from './components/Gallery.jsx'
import Gift from './components/Gift.jsx'
import RSVP from './components/RSVP.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="min-h-screen">
      <Cover />
      <div id="content">
        <Couple />
        <Story />
        <Event />
        <Countdown />
        <Gallery />
        <Gift />
        <RSVP />
        <Footer />
      </div>
    </div>
  )
}

export default App
