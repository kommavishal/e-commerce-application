import React from 'react'
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import {Routes,Route} from "react-router-dom";
import AddProduct from '../../components/AddProduct/AddProduct.jsx';
import Listproduct from '../../components/Listproduct/Listproduct.jsx';

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<Listproduct/>} />
      </Routes>
    </div>
  )
}

export default Admin
