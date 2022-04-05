import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <ul className='navbar'>
            <li className='navbar-item'>
                <NavLink to='/' className='navbar-link'>Weather</NavLink>
                <div className="underline"></div>
            </li>
            <li className='navbar-item'>
                <NavLink to='/compare' className='navbar-link'>Compare</NavLink>
                <div className="underline"></div>
            </li>
        </ul>
    )
};

export default Navbar;