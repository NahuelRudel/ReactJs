import logo from "../../img/clothingLogo.png"
import "./styles.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div >
                <a href="#">
                    <img src={logo} alt="logo" className="logoApp" />
                </a>
            </div>
            <div>
                <ul >
                    <li>
                        <a href="#">Remeras</a>
                    </li>
                    <li>
                        <a href="#">Buzos</a>
                    </li>
                    <li>
                        <a href="#">Pantalones</a>
                    </li>                     
                </ul>
            </div>
            <div>
                <button className="buttonNav">Login</button>
                <a href="#">
                    <CartWidget />
                </a>
            </div>
        </div>
    )
}

export default NavBar