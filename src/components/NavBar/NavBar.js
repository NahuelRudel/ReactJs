import logo from "../../clothingLogo.png"
import "./styles.css"

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
            </div>

        </div>
    )
}

export default NavBar