import "./VegetableCard.scss";

// export default function VegetableCard(props: any) {
//   // console.log(props.vegetable)
//   return (
//     <div className="VegetableCard">
//       {props.vegetable.name}
//       <img
//         className="VegetableCardImage"
//         alt="veggie pic"
//         src={props.vegetable.image_url}
//       />
//       <div>description: {props.vegetable.description}</div>
//       <div>growing_days: {props.vegetable.growing_days}</div>
//       <div>height: {props.vegetable.height}</div>
//       <div>native_region: {props.vegetable.native_region}</div>
//     </div>
//   );
// }
//--------------------------------
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function VegetableCard(props: any) {
  return (
    <Card className={'VegetableCard'}>
      <CardMedia
        className={'VegetableCardImage'}
        component="img"
        image={props.vegetable.image_url}
        alt="veggie pic"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.vegetable.name}
        </Typography>
        <Typography className={'VegetableCardDescription'} variant="body2" color="text.secondary">
          {props.vegetable.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
