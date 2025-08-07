
import "../css/NavBar.css"
import CartWidget from "./CartWidget"


const NavBar = () => {
    console.log('navbar')
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="./Logo-tecnocare.png" alt="logo" className="logo"/>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}
export default NavBar