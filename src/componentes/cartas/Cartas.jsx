import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export const Cartas = ({ title, description, price, id, img }) => {
  //const {title, description, price} = props --> Esto es desestructuracion

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia sx={{ height: 140, width: "100%" }} image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="outlined">
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
