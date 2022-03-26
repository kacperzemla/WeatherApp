import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <ul className='navbar'>
            <li className='navbar-item'>
                <NavLink to='/' className='navbar-link'>Weather</NavLink>
                <div class="underline"></div>
            </li>
            <li className='navbar-item'>
                <NavLink to='/compare' className='navbar-link'>Compare</NavLink>
                <div class="underline"></div>
            </li>
        </ul>
    )
};

export default Navbar;