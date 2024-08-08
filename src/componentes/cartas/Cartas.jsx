import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./cartas.css";

export const Cartas = ({ title, description, price, id, img }) => {
  return (
    <Card className="card">
      <CardMedia className="card-media" image={img} />
      <CardContent className="card-content">
        <Typography
          className="card-title"
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          className="card-description"
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
        <Typography
          className="card-price"
          variant="body2"
          color="text.secondary"
        >
          ${price}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Link to={`/itemDetail/${id}`}>
          <Button className="card-button" size="small" variant="outlined">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
