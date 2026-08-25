import './app.scss'
import Dock from './componets/dock'
import Nav from './componets/nav'
import Github from './componets/windows/Github'
import Note from './componets/windows/Note'
function App() {
  

  return (
  
    <main>
      <Dock></Dock>
      <Nav />
      <Github/>
      <Note/>
     
    </main>
    
  )
}

export default App
