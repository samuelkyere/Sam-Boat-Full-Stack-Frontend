import React from 'react'
function TimeZone(props){
    return(
        <div className='tm'>
           {props.timez.formatted}
        </div>
    )
}
export default TimeZone;