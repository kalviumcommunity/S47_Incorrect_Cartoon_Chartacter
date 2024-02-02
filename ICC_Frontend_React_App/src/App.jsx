import './App.css'
import Home from './Pages/Home'
import {Routes , Route} from 'react-router-dom'
import Content from './Pages/Content'
function App() {

  return (
    <>
    <div className='mainPage'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/content" element={<Content />}/>
        </Routes>
    </div>
      
    </>
  )
}

export default App
