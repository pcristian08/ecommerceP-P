import { CartWidget } from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navcontainer">
          <Link to="/">
            <img src="https://res.cloudinary.com/dubanhzqy/image/upload/v1719757811/pyp_hvehok.png"></img>
          </Link>
          <ul>
            <Link to="/">Todos</Link>
            <Link to="/category/Impulsores">Impulsores</Link>
            <Link to="/category/Reguladores">Reguladores de voltaje</Link>
            <Link to="/category/Portadiodos">Porta diodos</Link>
            <Link to="/category/Portaescobillas">Porta escobillas</Link>
            <Link to="/category/Iluminacion">Iluminacion</Link>
            <Link to="/category/Otros">Otros</Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
