

import './App.css'
import Layout from './components/Layout'
import Side from './components/side/Side'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import styled from 'styled-components';
import User from './pages/User';
import Products from './pages/product/Products';


function App() {

  return (

    <BrowserRouter>

      <Body>
        <Side />



        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/user' element={<User />} />
          <Route path='/products' element={<Products />} />
        </Routes>

      </Body>
    </BrowserRouter>


  )
}

export default App

const Body = styled.div`
  display: flex;
  height: 100vh;

`