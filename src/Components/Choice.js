import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`,
    color:`white !important`,
    marginTop: `10rem`,
    boxShadow: `0 10px 15px 12px rgba(blue, 0.9)`,
    '&:hover':{
        background:`linear-gradient(90deg, rgba(0,212,255,1) 100%, rgba(9,9,121,1) 50%, rgba(2,0,36,1) 20%)`
    }
    
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" align="center">
      <CardContent>
        <Typography className={classes.title} color="inherit" gutterBottom>
          {props.type}
        </Typography>
        <Typography variant="h5" component="h2" color="inherit">
          {props.hire}
        </Typography>
      </CardContent>
      <CardContent>
            <Button variant="contained" color="default" onClick={()=>props.handleOnClick()}>
                {props.hire==="Worker"?'Apply Now':'Hire Now'}
            </Button>
      </CardContent>
    </Card>
  );
}
