import React from 'react';
import  {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className='head'>
        {/* <h3>Sam Boat Ventures</h3> */}
        <ul className='nav-links'>
         <Link to='about'> <li>About Us</li></Link>
         <Link to='contact'><li>Contact Us</li></Link>
         <Link to='feedback'><li>Feedback</li></Link>
         <Link to='home'><li>Home</li></Link>
         <Link to='timezone'><li>Time Zone</li></Link>
        </ul>
        </nav>
    )
}
export default Nav;