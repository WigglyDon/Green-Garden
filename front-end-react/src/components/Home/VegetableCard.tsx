import "./VegetableCard.scss";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import GardenSelector from "./GardenSelector";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function VegetableCard(props: any) {
  
  const [expanded, setExpanded] = React.useState(false);
  // eslint-disable-next-line
  const { state, setState } = props;
  // eslint-disable-next-line
  const [selectedGarden, setSelectedGarden] = React.useState('');

  console.log("VEGETABLE CARD STATE", state);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={"VegetableCard"}>
      <div className='image-container'> 
      <CardMedia
        className={"VegetableCardImage"}
        component="img"
        image={props.vegetable.image_url}
        alt="veggie pic"
      />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.vegetable.name}
        </Typography>
        <Typography
          className={"VegetableCardDescription"}
          variant="body2"
          color="text.secondary"
        >
          {props.vegetable.description}
        </Typography>
      </CardContent>

      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse
        className="VegetableCardDropdown"
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
        {/* <div> THIS CARD ID IS: {props.vegetable.id}</div> */}
          <div> Native Region: {props.vegetable.native_region}</div>
          <div> Row Spacing: {props.vegetable.row_spacing}</div>
         <div>Spread: {props.vegetable.spread}</div>
          <div> Sowing Method: {props.vegetable.sowing_method}</div>
          <div> Tags: {props.vegetable.tags}</div>
          {/* <div> Sun Level: {props.vegetable.sun_level}</div> */}
          {/* <div> Height: {props.vegetable.height}</div> */}
          {/* <div>Growing Days: {props.vegetable.growing_days}</div> */}
          {/* <div> Water Amount: {props.vegetable.water_amount}</div> */}

          <GardenSelector currentVegetableId={props.vegetable.id} state={state} selectedGarden={selectedGarden} />
          <Button >  Add to Garden </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}
