import React from 'react'
import { Nav, NavLink,NavIcon,PizzaIcon} from './NavbarElements'

export const Navbar = () => {
    return (
     
            <Nav>
                <NavLink to='/'>
                    Muncheese
                </NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <PizzaIcon/>
                </NavIcon>
            </Nav>
       
    )
}
