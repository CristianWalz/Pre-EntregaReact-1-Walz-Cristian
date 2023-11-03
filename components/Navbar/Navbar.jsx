import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";


export default function Navbar() {
  return (
    <>
    <nav className="navbar">
        <Brand/>
        <ul className="nav-list">
            <li><a className="nav-list__a" href="#">Inicio</a></li>
            <li><a className="nav-list__a" href="#">Productos</a></li>
            <li><a className="nav-list__a" href="#">Nosotros</a></li>
            <li><a className="nav-list__a" href="#">Contacto</a></li>
        </ul>
        <CartWidget/>
    </nav>
    </>
  )
}
