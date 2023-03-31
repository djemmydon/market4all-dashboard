

import './App.css'
import Layout from './components/Layout'
import Side from './components/side/Side'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Main from './components/main/Main';
import styled from 'styled-components';
import User from './pages/User';
import Products from './pages/product/Products';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState, UsersType, UserType } from './typing';
import CreateProductPage from './pages/product/CreateProduct';



function App() {
  const users = useSelector((state): RootState => state.user.userInfo)
  const navigate = useNavigate()

  console.log(users)

  useEffect(() => {
    if (!users?.token) {
      navigate("/login")
    }
  }, [users])



  return (



    <Body>
      <Side />

      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-product' element={<CreateProductPage />} />
        <Route path='/products' element={<Products />} />
      </Routes>

    </Body>

  )
}

export default App

const Body = styled.div`
  display: flex;
  height: 100vh;

`