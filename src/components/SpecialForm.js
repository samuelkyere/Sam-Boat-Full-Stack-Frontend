import React from "react";
import { useState } from "react";
import ProductService from "../ProductService";
// const[rareProds,setRareProds]=useState()
// const handleChange => event =>{
//     event.preventDefault();
    
// }
function SpecialProd(props){
    // const SpecialForm = () =>{
    let [scarceProd,setScarceProd] = useState('');
    const handleChange = (event) => {
        setScarceProd(event.target.value);
    }
    const [display,setDisplay] = useState([{productName:"",image:'',originOfProduct:'',unitPrice:''}])
    const handleSubmit = event => {
        event.preventDefault()
        console.log(scarceProd)
        props.handleSubmit2(scarceProd)
        ProductService.getProductByName(scarceProd).then(res=>{
           setDisplay(res.data)
        })
        console.log(display)

    }
    
    
   return (
       <div>

    <form onSubmit= {handleSubmit}className='cf'>
    {/* <label htmlFor='title'>title:
    </label>
    <input id='title' onChange={handleChange} value={state.title} type='title'/> */}
    {/* <label htmlFor='price'>price: </label>
    <input id='price' onChange={handleChange} value={state.price} type='price'/> */}
    <label htmlFor='name'>search product: </label>
    <input id='name' onChange={handleChange} value={scarceProd} type='name'/>
    {/* <label htmlFor='quantity'>quantity: </label>
    <input id='quantity' onChange={handleChange} value={state.quantity} type='quantity'/> */}
    <label>Is Purchased</label>
    <input name='is-purchased' type='checkbox'/>
<button>Submit</button>
    </form>
    <ul>
    <li>{display[1].productName}</li>
    <img src ={display[1].image} />
    <h2>{display[1].unitPrice}</h2>
    <h3>{display[1].originOfProduct}</h3>
    </ul>
    </div>
   )
}

export default SpecialProd;