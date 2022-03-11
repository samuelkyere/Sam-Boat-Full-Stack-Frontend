import React, { useEffect, useState } from "react"
import ProductService from "../ProductService"
import {useParams} from 'react-router-dom'


function View(){
const[see,setSee]=useState({
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
const { id } = useParams()
//     const[crea,setCrea]=useState({
//         id: '',
//         productName: '', 
//         quantity: '',
//         unitPrice: '',
// //	    price = unitPrice*quantity;
//         image: '',
//         originOfProduct: '',
//         isPurchased: ''
//     });
//   const View = ({}) => {
//       const { productName} = useParams();
//       return (
//           <div className="full-detail"></div>
//       )
const handleChange = (event) => {
    setSee(event.target.name.value);
}
useEffect(()=>{
ProductService.getProductById(id)
    
},[])
const handleSubmit = ((event)=>{
    event.preventDefault();
   ProductService.getProductById().then((res)=>{
       setSee({product:res.data})
   })}


  
    )
    return(
        <div>
            <form  onSubmit= {handleSubmit}>
            <label htmlFor='id'>id:</label>
    <input id='id' onChange={handleChange} value={see.id} type='id'/>
    <label htmlFor='productName'>Product Name:</label>
    <input id='productName' onChange={handleChange} value={see.product.productName} type='productName'/>
    <label htmlFor='quantity'>quantity:
    </label>
    <input id='quantity' onChange={handleChange} value={see.product.quantity} readOnly={true} type='quantity'/>
    <label htmlFor='unitPrice'>Unit unitPrice:
    </label>
    <input id='unitPrice' onChange={handleChange} value={see.product.unitPrice} readOnly={true} type='unitPrice'/>
    {/* <label htmlFor='Price'>Price:
    </label>
    <input id='price' onChange={handleChange} value={crea.price} type='price'/> */}
     <label htmlFor='image'>image:
    </label>
    <input id='image' onChange={handleChange} value={see.product.image} readOnly={true} type='image'/>
    <label htmlFor='originOfProduct'>originOfProduct:
    </label>
    <input id='originOfProduct' onChange={handleChange} value={see.product.originOfProduct} readOnly={true} type='originOfProduct'/>
    <label htmlFor='isPurchased'>id:
    </label>
    <input id='isPurchased' onChange={handleChange} value={see.product.isPurchased} readOnly={true} type='isPurchased'/>
    <button className='store' >View</button>
            </form>
        </div>
    )
}
  export default View;
