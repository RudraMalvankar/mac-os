import './app.scss'
import Dock from './componets/dock'
import Nav from './componets/nav'
import MacWindow from './componets/windows/MacWindow'

function App() {
  

  return (
  
    <main>
      <Dock></Dock>
      <Nav />
      <MacWindow/>
    </main>
    
  )
}

export default App
