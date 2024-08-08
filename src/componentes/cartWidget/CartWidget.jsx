import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = ({ className }) => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();

  return (
    <div className={className}>
      <Link to="/cart">
        <Badge badgeContent={total} color="primary" showZero={true}>
          <ShoppingCartIcon color="#AD8D54" />
        </Badge>
      </Link>
    </div>
  );
};
