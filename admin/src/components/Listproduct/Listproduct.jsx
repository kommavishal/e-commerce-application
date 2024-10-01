import React from 'react'
import './Listproduct.css'
import { useState } from 'react'
import { useEffect } from 'react';
import cross_icon from '../../assets/cross_icon.png'
const Listproduct = () => {

    const [allproducts,setAllproducts]=useState([]);

    const fetchInfo=async ()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllproducts(data)});
    }
    useEffect(()=>{
        fetchInfo();
    },[]);

    const remove_product=async(id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }


  return (
    <div className='listproduct'>
      <h1>All products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old_price</p>
        <p>New_price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
            return <> <div key={index} className="listproduct-format-main listproduct-format">
                <img className='listproduct-product-icon' src={product.image} alt="" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
                
            </div>
            <hr />
            </>
        })}

      </div>
    </div>
  )
}

export default Listproduct
