import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(2),
      
    },
  },
}));

export default function HalfRating() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginLeft:"5px"}}>
      &nbsp; Amy
    
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
      &nbsp; 3 july 2020
    </div>
  );
}
