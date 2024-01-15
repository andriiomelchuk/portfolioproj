import {NavLink} from "react-router-dom";
import  '../Nav/Nav.css'


// Easy nav

const navLinks = [
    {id: 0, title: 'Home', link: '/'},
    {id: 1, title: 'Search movies', link: 'Movies'},
    {id: 2, title: 'Popular languages', link: 'Popular'},
    {id: 3, title: 'Github Battle', link: 'battle'},
];

const Nav = () => {
    return (
        <nav>
            <ul className='nav'>
                {navLinks.map(navLink => (
                    <li key={navLink.id}>
                        <NavLink className='navItem' to={navLink.title === 'Home' ?'/' : navLink.link.toLowerCase()}>
                            {navLink.title}
                        </NavLink>
                    </li>
                ))}

            </ul>
        </nav>
    )
}

export default Nav

/*

constants.jsx Nav = () => {
    return (
        <nav>
        <ul className='nav'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='popular'>PopularPage</NavLink>
            </li>
            <li>
                <NavLink to='battle'>Battle</NavLink>
            </li>
        </ul>
        </nav>
    )
}

export default Nav


* */