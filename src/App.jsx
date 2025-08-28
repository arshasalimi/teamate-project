import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import Parent from './Pages/ProductDetailParentPage'


function App() {

  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/productdetail' element={<Parent/>}/>
      </Routes>
  )
}

export default App
