import { Grid, Typography } from "@mui/material";
import { estilos } from "./estilos";

const Responsive = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" color={"primary.main2"}>
            Caja 1
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={estilos.cajaDos}>
            Caja 2
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={estilos.cajaTres}>
            Caja 3
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Responsive;
