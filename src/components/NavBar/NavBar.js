import logo from "../../img/clothingLogo.png"
import "./styles.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div >
                <NavLink to='/'>
                    <img src={logo} alt="logo" className="logoApp" />
                </NavLink>
            </div>
            <div>
                <ul >
                    <li>
                        <NavLink to='/category/remeras'>Remeras</NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/buzos'>Buzos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/category/pantalones'>Pantalones</NavLink>
                    </li>                     
                </ul>
            </div>
            <div>
                <button className="buttonNav">Login</button>
                <NavLink to='/carrito'>
                    <CartWidget />
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar