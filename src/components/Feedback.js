import React, {useState} from 'react';
function Feedback (){
    const [state,setState]=useState({
        name: '',
        email:'',
        mobilecontact:'',
        feedback:'',
    })
    const handleChange = event => {
        setState({[event.target.id]:event.target.value})
    }
   const handleSubmit = event => {
//         event.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit} className='fb'>
            <label htmlFor='name'>Name: </label>
            <input id='name' onChange={handleChange} value={state.name}/>
            <label htmlFor='email'>email: </label> 
            <input id='email' onChange={handleChange} value={state.email}/>
            <label htmlFor='mobilecontact'>mobile contact: </label>
            <input id='mobilecontact' onChange={handleChange} value={state.mobilecontact}/>
            <label htmlFor='feedback'>feedback: </label>
            <input id='feedback' onChange={handleChange} value={state.feedback}/>
            <button>Submit</button>
        </form>
    )

}
export default Feedback;