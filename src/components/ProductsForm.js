import  React, {useReducer,useContext} from 'react'
import {prodforContext} from '../App'

function myStateReducer(state,action){
    return(action.payload)
}
function ProductsForm() {
    const value =useContext(prodforContext)
const[state,dispatchState]=useReducer( myStateReducer,{
    
    name: '',

    isPurchased: false
    })


const handleChange = event => {
    dispatchState({type:'updateState',payload:{ [event.target.id]:event.target.value}})
}
const handleSubmit2 = (event)=>{
    event.preventDefault();
    value(state)
}
return(
    <form onSubmit= {handleSubmit2}className='cf'>
        {/* <label htmlFor='title'>title:
        </label>
        <input id='title' onChange={handleChange} value={state.title} type='title'/> */}
        {/* <label htmlFor='price'>price: </label>
        <input id='price' onChange={handleChange} value={state.price} type='price'/> */}
        <label htmlFor='name'>search product: </label>
        <input id='name' onChange={handleChange} value={state.name} type='name'/>
        {/* <label htmlFor='quantity'>quantity: </label>
        <input id='quantity' onChange={handleChange} value={state.quantity} type='quantity'/> */}
        <label>Is Purchased</label>
        <input name='is-purchased' type='checkbox'/>
    <button>Submit</button>
    </form>
)
}
export default ProductsForm;