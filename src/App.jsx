import './App.css'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListAllResponses from './pages/ListAllResponses'
import AddWasteType from './pages/AddWasteType'
import SearchWasteType from './pages/SearchWasteType'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<ProtectedRoute>
              <Home/>
            </ProtectedRoute>}></Route>
          <Route path="/responses" element={<ProtectedRoute>
              <ListAllResponses />
            </ProtectedRoute>}></Route>
          <Route path="/create" element={<ProtectedRoute>
            <AddWasteType/>
            </ProtectedRoute>}></Route>
          <Route path="/search" element={<ProtectedRoute>
              <SearchWasteType />
            </ProtectedRoute>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
