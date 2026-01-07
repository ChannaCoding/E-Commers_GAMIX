import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails'
import CartPage from './Pages/CartPage'
import Navbar from './assets/Components/Navbar'
import Home  from './Pages/Home'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import FAGs from './Pages/FAGs'
import Contect  from './Pages/Contect'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Favorites from './Pages/Favorites'
import  Settings from './Pages/Settings'

const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter >
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/faqs' element={<FAGs/>}/>
            <Route path='/contact' element={<Contect/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<Register/>}/>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
