

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
import { UsersType, UserType } from './typing';



function App() {
  const user = useSelector<UserType>((state) => state.user.userInfo)
  const navigate = useNavigate()

  console.log(user.token)

  useEffect(() => {
    if (!user?.fullName) {
      navigate("/login")
    }
  }, [user])



  return (



    <Body>
      <Side />

      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login />} />
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