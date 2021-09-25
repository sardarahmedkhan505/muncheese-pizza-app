import React from 'react'
import { Nav, NavLink,NavIcon,PizzaIcon} from './NavbarElements'

export const Navbar = ({toggle}) => {
    return (
     
            <Nav>
                <NavLink to='/'>
                    Muncheese
                </NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <PizzaIcon/>
                </NavIcon>
            </Nav>
       
    )
}
