import "./VegetableCard.scss";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import axios from "axios";
import GardenSelector from './GardenSelector';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function VegetableCard(props: any) {
  const [expanded, setExpanded] = React.useState(false);
  const {state} = props;

  console.log("VEGETABLE CARD STATE", state)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse className='VegetableCardDropdown'in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Button onClick={() => {
            axios.post('http://localhost:8080/api/gardensvegetables', {
              gardenId: 1,
              vegetableId: 1
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          }}>Add to Garden</Button>
         <GardenSelector state={state}/>
        </CardContent>
        this is also where the description of my vegetable will go
      </Collapse>


    </Card>
  );
}
