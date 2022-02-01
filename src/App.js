import axios from 'axios'
import React, {createContext} from 'react'
import './App.css';
import  {useReducer,useState,useEffect} from 'react'
import ProductsForm from './components/ProductsForm'
import Feedback from './components/Feedback';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error'
import Nav from './components/Nav';
import TimeZone from './components/TimeZone'

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

  const [searchHistory,setSearchHistory]=useState('');
  useEffect(() => {
    allData()}, [searchHistory])
    const [showdisplay, setShowwDisplay] = useState(false)
  useEffect(() => {
    allTimeData()}, [showdisplay]
  )
  // console.log(state)
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