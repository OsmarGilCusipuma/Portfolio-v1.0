import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Knowledge from './components/Knowledge'
import Projects from './components/Projects'

function App() {

  return (
    <div className='bgsome'>
      <Header></Header>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Knowledge></Knowledge>
      <Projects></Projects>
      <Contact></Contact>
      <div className='h-[200px]'></div>
    </div>
  )
}

export default App