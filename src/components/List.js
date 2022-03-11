import React, {useState} from "react";
import ProductService from "../ProductService";
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react/cjs/react.development";


function List(props){
    const navigate = useNavigate();
    const[more,setMore]=useState({
        id: '',
        productName: '', 
        quantity: '',
        unitPrice: '',
//	    price = unitPrice*quantity;
        image: '',
        originOfProduct: '',
        isPurchased: ''
    });
 

        const handleChange = (event) => {
            setMore(event.target.productName.value);
        }
        useEffect(()=>{
            ProductService.getProductById(id)
                },[])

            const handleSubmit = ((event)=>{
                event.preventDefault();
               ProductService.getProductById().then((res)=>{
                   setMore({product:res.data})
               })})

               addProduct()
               {
                   navigate('/add-product');
               }
               editProduct(id)
               {
                   navigate(`/update-product${id}`);
               }
               deleteProduct(id)
               {
                   navigate(`/view-student/${id}`);
               }

                
                return (
                    <div>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor='id'>id:</label>
    <input id='id' onChange={handleChange} value={crea.id} type='id'/>
    <label htmlFor='productName'>Product Name:</label>
    <input id='productName' onChange={handleChange} value={crea.productName} type='productName'/>
    <label htmlFor='quantity'>quantity:
    </label>
    <input id='quantity' onChange={handleChange} value={crea.quantity} type='quantity'/>
    <label htmlFor='unitPrice'>Unit unitPrice:
    </label>
    <input id='unitPrice' onChange={handleChange} value={crea.unitPrice} type='unitPrice'/>
    {/* <label htmlFor='Price'>Price:
    </label>
    <input id='price' onChange={handleChange} value={crea.price} type='price'/> */}
     <label htmlFor='image'>image:
    </label>
    <input id='image' onChange={handleChange} value={crea.image} type='image'/>
    <label htmlFor='originOfProduct'>originOfProduct:
    </label>
    <input id='originOfProduct' onChange={handleChange} value={crea.originOfProduct} type='originOfProduct'/>
    <label htmlFor='isPurchased'>id:
    </label>
    <input id='isPurchased' onChange={handleChange} value={crea.isPurchased} type='isPurchased'/>
    <button className='store' onClick={saveProduct}>Save</button>
                    </form>
                    </div>
                )
                
       }export default List;