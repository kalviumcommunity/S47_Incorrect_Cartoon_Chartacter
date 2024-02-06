import './App.css'
import Home from './Pages/Home'
import {Routes , Route} from 'react-router-dom'
import Content from './Pages/Content'
import AddForm from './Pages/AddForm'
function App() {

  return (
    <>
    <div className='mainPage'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/content" element={<Content />}/>
          <Route path='/add' element={<AddForm/>}/>
        </Routes>
    </div>
      
    </>
  )
}

export default App
