import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import ProductDetailPage from './Pages/ProductDetail-Page'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/productdetail' element={<ProductDetailPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
