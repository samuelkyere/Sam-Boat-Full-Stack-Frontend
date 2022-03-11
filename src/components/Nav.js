import React from 'react';
import  {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className='head'>
        {/* <h3>Sam Boat Ventures</h3> */}
        <ul className='nav-links'>
         <Link to='about'> <li>About Us</li></Link>
         <Link to='contact'><li>Contact Us</li></Link>
         <Link to='home'><li>Home</li></Link>
         <Link to='addProducts'><li>AddProduct</li></Link>
         <Link to='view'><li>View</li></Link>
         <Link to='special'><li>Special</li></Link>
         <Link to='updateProduct'><li>Update Product</li></Link>
         <Link to='delete'><li>Delete</li></Link>
         <Link to='feedback'><li>Feedback</li></Link>
         {/* <Link to='timezone'><li>Date/Time</li></Link> */}
        </ul>
        </nav>
    )
}
export default Nav;