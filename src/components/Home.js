import React from 'react';
import ProductsForm from './ProductsForm';
function Home(props){
  
    return(
        <div>
            <h4>Sam Boat search </h4>
            <ProductsForm handleSubmit={props.handleSubmit}/>
            {props.bothname && props.bothname.map((element,index)=>{ 
                if (element.price === undefined) return null
                return( <div key={index} className='na'>
                <div >{element.title}</div>
        
                    <div className='di'>{element.price.raw}</div>
                    <a href={element.link} className='ebl'> purchase on ebay </a>
                    <img src={element.image}/>
                
                </div>
                    )

            })}
        </div>
    )
}
export default Home;