import './App.css';
import Main from "./view/Main"
import Detail from "./components/Detail"
import UpdateProduct from './components/UpdateProduct';
import {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditProduct from './view/EditProduct';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default/>
          <Route element={<Detail />} path="/products/:id" />
          <Route element={<UpdateProduct />} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;