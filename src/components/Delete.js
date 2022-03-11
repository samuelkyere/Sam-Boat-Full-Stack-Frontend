import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import ProductService from "../ProductService";
import {useParams} from 'react-router-dom'

function Delete(){
    const { id } = useParams();
    const navigate = useNavigate();
    const[del,setDel]=useState({
        id:'',
        product:{
            productName: '', 
            quantity: '',
            unitPrice: '',
    //	    price = unitPrice*quantity;
            image: '',
            originOfProduct: '',
            isPurchased: ''
            
        }
        
   })
   const handleSubmit = ((event)=>{
    event.preventDefault();
   })

    useEffect(()=>{
     ProductService.getProductById(id)
     },[])

     const handleChange = (event) => {
        setDel(event.target.name.value);
     }
       
     const deleteProduct = (d) => {
        d.preventDefault();
        let product = {
            id: del.id,
            productName: del.product.productName,
            quantity: del.product.quantity,
            unitPrice: del.product.unitPrice,
            image: del.product.image,
            originOfProduct:del.product.originOfProduct,
            isPurchased: del.product.isPurchased
        };
        console.log(product);
        ProductService.deleteProduct(product,del.id).then(res => {

            navigate('/product')
        })
       
     }
     return(
        <div>
            <form  onSubmit= {handleSubmit}>
            {/* <label htmlFor='id'>id:</label>
    <input id='id' onChange={handleChange} value={del.id} type='id'/> */}
    <label htmlFor='productName'>Product Name:</label>
    <input id='productName' onChange={handleChange} value={del.product.productName} type='productName'/>
    <label htmlFor='quantity'>quantity:
    </label>
    <input id='quantity' onChange={handleChange} value={del.product.quantity}  type='quantity'/>
    {/* <label htmlFor='unitPrice'>Unit unitPrice:
    </label>
    <input id='unitPrice' onChange={handleChange} value={del.product.unitPrice}  type='unitPrice'/> */}
    {/* <label htmlFor='Price'>Price:
    </label>
    <input id='price' onChange={handleChange} value={del.price} type='price'/> */}
     {/* <label htmlFor='image'>image:
    </label>
    <input id='image' onChange={handleChange} value={del.product.image} type='image'/>
    <label htmlFor='originOfProduct'>originOfProduct:
    </label> */}
    {/* <input id='originOfProduct' onChange={handleChange} value={del.product.originOfProduct}  type='originOfProduct'/> */}
    <label htmlFor='isPurchased'>id:
    </label>
    <input id='isPurchased' onChange={handleChange} value={del.product.isPurchased}  type='isPurchased'/>
    <button className='store' onClick={deleteProduct} >Delete</button>
            </form>
        </div>
    )       
        
        
 }export default Delete;

