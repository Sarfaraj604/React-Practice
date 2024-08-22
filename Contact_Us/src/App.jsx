
import './App.css'
import Nav from './components/Navigation/Nav'
import ContactForm from './components/ContactForm/ContactForm'
import Contactheader from './components/Contact_header/Contactheader'

function App() {
  return (
    <div>
      <Nav/>
      <main className="main_container">
      <Contactheader/>
      <ContactForm/>
      </main>
    </div>
  )
}

export default App
