import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Weak } from "./Weak";

//showing pokemons on cards

export default function ActionAreaCard({ name, type, img }) {
  return (
    <Card sx={{ maxWidth: 500, bgcolor: "#f8efc9df" }}>
      <CardActionArea>
        <CardMedia component="img" height="320" image={img} alt={name} />
        <CardContent style={{ textTransform: "capitalize" }}>
          <Typography gutterBottom variant="h5" component="div">
            <b style={{ fontFamily: "Press Start 2P" }}>{name}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Name: </b>
            {name} <br />
            <b>Type: </b>
            {type}
            <br />
            <b>Weak:</b> <Weak type={type} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}