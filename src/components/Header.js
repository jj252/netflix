
import NucampLogo from '../app/assets/img/logo.png';
import Netflix from '../app/assets/img/netflix.png';
import {useState} from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import UserLoginForm from '../features/user/UserLoginForm';
import style from '../app/shared/StudentList.module.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
    <Navbar  color='black' sticky='top' expand='md'>
    
         <NavbarBrand className='ms-1' href='/'>
             <img src={Netflix} alt='nucamp logo' className="float-start" />
             
         </NavbarBrand>
         <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
         <Collapse isOpen={menuOpen} navbar>
            
            <Nav className={style.myNav} navbar>
            
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className="fa fa-home fa-lg" /> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/directory'>
                    <i className="fa fa-list fa-lg" /> TV Shows
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/about'>
                        <i className="fa fa-info fa-lg" /> Movies
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                        <i className="fa fa-address fa-lg" /> New & Popular
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/contact'>
                        <i className="fa fa-address fa-lg" /> My List
                    </NavLink>
                </NavItem>
                <UserLoginForm />
            </Nav>
        </Collapse>
 </Navbar>)
}

export default Header;