import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
// eslint-disable-next-line
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line
import { Button } from '@mui/material';
import './GardenCard.scss'



// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function GardenCard(props: any) {
  // eslint-disable-next-line
  const { garden_name, image } = props;


  // const [expanded, setExpanded] = React.useState(false);

  return (
    <Card>
      {/* <CardMedia
        component="img"
        image={image}
      /> */}

      <Typography variant="body2" color="text.secondary" className="card-body">
         {garden_name}
      </Typography>

    </Card>
  );
}
