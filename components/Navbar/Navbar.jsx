import Brand from "../Brand/Brand";
import CartWidget from "../CartWidget/CartWidget";


export default function Navbar() {
  return (
    <>
    <nav className="navbar">
        <Brand/>
        <ul className="nav-list">
            <li><a style={ {color: "white"} } href="#">Inicio</a></li>
            <li><a style={ {color: "white"} } href="#">Productos</a></li>
            <li><a style={ {color: "white"} } href="#">Nosotros</a></li>
            <li><a style={ {color: "white"} } href="#">Contacto</a></li>
        </ul>
        <CartWidget/>
    </nav>
    </>
  )
}
