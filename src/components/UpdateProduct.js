import React, {useState} from "react";
import ProductService from "../ProductService";
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function UpdateProduct(){
    const navigate = useNavigate();
    const { id } = useParams();
    const[renew,setRenew]=useState({
        id: '',
       product:{
            productName: '', 
        quantity: '',
        unitPrice: '',
//	    price = unitPrice*quantity;
        image: '',
        originOfProduct: '',
        isPurchased: ''
       }
    });
  
    const handleSubmit = ((event)=>{
        event.preventDefault(id);
       })  

       const handleChange = (event) => {
        setRenew(event.target.name.value);
     }



    //    useEffect(()=>{
    //     ProductService.getProductById(id).then((res)=>{
    //         let product = res.data;
    //         setRenew({
    //             id: product.id,
    //             productName: product.productName, 
    //             quantity: product.quantity,
    //             unitPrice: product.unitPrice,
    //     //	    price = unitPrice*quantity;
    //             image: product.image,
    //             originOfProduct: product.originOfProduct,
    //             isPurchased: product.isPurchased
                
    //         })

    //     }

       
       

       
        
        // const handleChange = (event) => {
        //     // setCrea(event.target.productName.value);
        //     let id = event.target.id;
        //     let productName = event.target.productName;
        //     let quantity = event.target.quantity;
        //     let unitPrice = event.target.unitPrice;
        //     // let price = event.target.value;
        //     let image = event.target.image;
        //     let originOfProduct = event.target.originOfProduct;
        //     let isPurchased = event.target.isPurchased;

            
            const update = (u) => {
                u.preventDefault();
                let product={
                    id: renew.id,
                    productName: renew.product.productName, 
                    quantity: renew.product.quantity,
                    unitPrice: renew.product.unitPrice,
            //	    price = unitPrice*quantity;
                    image: renew.product.image,
                    originOfProduct: renew.product.originOfProduct,
                    isPurchased: renew.product.isPurchased
                }
                ProductService.updateProduct(product).then((res)=>{
                    navigate('/products')
            })
            }
               
           
            // useEffect(()=>{
            //     ProductService.getProductById(id)
                    
            //     },[])
            //     set
                
           
            return (
                    <div>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor='id'>id:</label>
    <input id='id' onChange={handleChange} value={renew.id} type='id'/>
    <label htmlFor='productName'>Product Name:</label>
    <input id='productName' onChange={handleChange} value={renew.product.productName} type='productName'/>
    <label htmlFor='quantity'>quantity:
    </label>
    <input id='quantity' onChange={handleChange} value={renew.product.quantity} type='quantity'/>
    <label htmlFor='unitPrice'>Unit unitPrice:
    </label>
    <input id='unitPrice' onChange={handleChange} value={renew.product.unitPrice} type='unitPrice'/>
    {/* <label htmlFor='Price'>Price:
    </label>
    <input id='price' onChange={handleChange} value={crea.price} type='price'/> */}
     <label htmlFor='image'>image:
    </label>
    <input id='image' onChange={handleChange} value={renew.product.image} type='image'/>
    <label htmlFor='originOfProduct'>originOfProduct:
    </label>
    <input id='originOfProduct' onChange={handleChange} value={renew.product.originOfProduct} type='originOfProduct'/>
    <label htmlFor='isPurchased'>id:
    </label>
    <input id='isPurchased' onChange={handleChange} value={renew.product.isPurchased} type='isPurchased'/>
    <button className='store' onClick={update}>Update Product</button>
                    </form>
                    </div>
                
                
    
    

            )
 
 } export default UpdateProduct;

        