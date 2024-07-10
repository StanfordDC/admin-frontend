import './App.css'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListAllResponses from './pages/ListAllResponses'
import AddWasteType from './pages/AddWasteType'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/responses" element={<ListAllResponses/>}></Route>
          <Route path="/create" element={<AddWasteType/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
