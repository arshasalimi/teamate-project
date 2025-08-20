import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
