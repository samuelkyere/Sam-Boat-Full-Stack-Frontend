import axios from 'axios'
import React, {createContext} from 'react'
import './App.css';
import  {useState,useEffect} from 'react'
// import ProductsForm from './components/ProductsForm'
import Feedback from './components/Feedback';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import Nav from './components/Nav';
import TimeZone from './components/TimeZone'
import ProductService from "./ProductService" 
import SpecialForm from './components/SpecialForm';
import View from './components/View';
import AddProduct from './components/AddProduct';
import Delete from './components/Delete';
import UpdateProduct from './components/UpdateProduct'
export const prodforContext= createContext()
function App() {
  const [state,setState] = useState({search_results:[{title:''}]});
  const allData = async () => {
    if (searchHistory==='') return
    const response = await axios.get(`https://mod2-countdown.herokuapp.com/?search_term=${searchHistory}`);
    setState(response.data)
    console.log (response.data)
  }
  
    const[timez,setTimez] = useState([]);
    const allTimeData = async () => {
      const res = await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=VF4D9XZWJ4CT&format=json&by=zone&zone=America/New_York`)
      setTimez(res.data)
      
    
  }
   const [state1, setState1] = useState([]);
   const allSpecialProducts = async () => {
    
     const special = await ProductService.getProductByName(searchSpecial)
   }
   const [searchSpecial,setSearchSpecial]=useState('');
  //  useEffect(()=>{
  //    allSpecialProducts()},[searchSpecial]
  //  )

  const [searchHistory,setSearchHistory]=useState('');
  useEffect(() => {
    allData()}, [searchHistory])
    const [showdisplay, setShowwDisplay] = useState(false)
  useEffect(() => {
    allTimeData()}, [showdisplay]
  )
  console.log(state)
  const handleSubmit1 = event => {
    console.log(event.target.name.value)
   
    event.preventDefault();
    setSearchSpecial(event.target.name.value);
    allSpecialProducts()
  }

  const handleSubmit2 = data => { 
    ProductService.getProductByName(data).then(res =>{
      setState1(res.data)
    })

  }
const  handleSubmit = event => {
  
   
  //   const form = event.target;
  //   const formData = {
  //    title: form.title.value,
  // price: form.price.value,
  // name: form.name.value,
  // quantity: form.quantity.value,
  // isPurchased:  form['is-purchased'].checked
  //   };
// console.log(searchHistory.data,formData)
  setSearchHistory(event.name );
  allData()
  // clearForm(form);
  
  
  
  }
  return (
    <BrowserRouter>
    <prodforContext.Provider value={handleSubmit}>
    <div className="App">
    <h1>Sam Boat Ventures - 'Higher Than The Highest'</h1>
      <Nav/>
      <Routes>
        <Route path='update' element={<UpdateProduct handleSubmit={handleSubmit}/>}/>
        <Route path='delete' element={<Delete handleSubmit={handleSubmit}/>}/>
        <Route path='addProducts' element={<AddProduct/>}/>
        <Route path='view/:id' element={<View handleSubmit={handleSubmit}/>}/>
        <Route path='special' element={<SpecialForm handleSubmit2={handleSubmit2}/>}/>
        <Route path='/' element= {<Home handleSubmit={handleSubmit} bothname={state.search_results} />}/>
        <Route path='home' element={<Home handleSubmit={handleSubmit} bothname={state.search_results}/>} />
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='timezone' element={<TimeZone timez={timez} />}/>
        <Route path='feedback' element={<Feedback/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    <div>{state.product !== undefined ? state.product.title : null}</div> 
    {/* <ProductsForm handleSubmit={handleSubmit}/> */}
    {/* <Cart state = {state}></Cart> */}
    </div>
    </prodforContext.Provider>
    </BrowserRouter>
    


  );
}

// function clearForm(form) {
//   form.title.value = '';
//   form.price.value = '';
//   form.name.value = '';
//   form.quantity.value = ''
//   form['is-purchased'].checked = false;
// }


export default App;