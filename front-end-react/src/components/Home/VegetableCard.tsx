import "./VegetableCard.scss";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

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
  const { state, handleAddVegetable, vegetable } = props;
  // eslint-disable-next-line
  const [selectedGarden, setSelectedGarden] = React.useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const email = localStorage?.getItem("email");
  return (
    <Card className={"vegetable-card"}>
      <div className="image-container">
        <CardMedia
          className={"VegetableCardImage"}
          component="img"
          image={vegetable.image_url}
          alt="veggie pic"
        />
      </div>
      <CardContent className="vegetable-textbox">
        <div className="vegetable-title">{vegetable.name}</div>
        <div className="vegetable-description">{vegetable.description}</div>
      </CardContent>
      <CardActions>
        <div className="drop-down" onClick={handleExpandClick}>
          <div className="learn-more"> Add to Garden </div>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className="chevron" />
          </ExpandMore>
        </div>
      </CardActions>

      <Collapse
        className="VegetableCardDropdown"
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <CardContent>
          <div className="vegetable-info">
            <div className="info">
              <p className="key">Native Region: </p>
              <p className="value"> {vegetable.native_region}</p>
            </div>
            <div className="info">
              <p className="key"> Tags: </p>
              <p className="value"> {vegetable.tags}</p>
            </div>
            <div className="info">
              <p className="key">Sun Level: </p>
              <p className="value"> {vegetable.sun_level}</p>
            </div>
            <div className="info">
              <p className="key"> Water Amount: </p>
              <p className="value"> {vegetable.water_amount}</p>
            </div>
            <div className="info">
              <p className="key"> Height: </p>
              <p className="value"> {vegetable.height}</p>
            </div>
            <div className="info">
              {/* <p className='key'>Sowing Method: </p> */}
              <p className="key"> {vegetable.sowing_method}</p>
            </div>
          </div>
          {/* <div> Row Spacing: {vegetable.row_spacing}</div> */}
          {/* <div> THIS CARD ID IS: {vegetable.id}</div> */}
          {/* <div>Spread: {vegetable.spread}</div> */}
          {/* <div>Growing Days: {vegetable.growing_days}</div> */}
          {email ? (
            <>
              <GardenSelector
                handleAddVegetable={handleAddVegetable}
                currentVegetableId={vegetable.id}
                state={state}
                selectedGarden={selectedGarden}
              />
            </>
          ) : (
            <div className="not-logged-in-msg">
              Please log in first to access add to garden.
            </div>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
