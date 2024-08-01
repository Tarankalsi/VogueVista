import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CollectionsPage from './pages/CollectionsPage'
import { RecoilRoot } from 'recoil'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'



function App() {


  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/collections' element={<CollectionsPage />} />
            <Route path='/collections/item' element={<CategoryPage />} />
            <Route path='/collections/item/product' element={<ProductPage />} />
            {/* <Route path='/collections/item/product1' element={<ExhibitionPage />} /> */}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
