import { CartWidget } from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navcontainer">
          <Link to="/">
            <img
              className="logo"
              src="https://res.cloudinary.com/dubanhzqy/image/upload/v1719757811/pyp_hvehok.png"
            ></img>
          </Link>
          <ul>
            <Link to="/category/Impulsores" className="my-link">
              Impulsores
            </Link>
            <Link to="/category/Reguladores" className="my-link">
              Reguladores de voltaje
            </Link>
            <Link to="/category/Portadiodos" className="my-link">
              Porta diodos
            </Link>
            <Link to="/category/Portaescobillas" className="my-link">
              Porta escobillas
            </Link>
            <Link to="/category/Iluminacion" className="my-link">
              Iluminacion
            </Link>
          </ul>
          <CartWidget className="cart-widget" />
        </div>
      </>
    </div>
  );
};
