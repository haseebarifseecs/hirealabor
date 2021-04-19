import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Choice from './Choice.js';
import HomeNav from './HomeNav'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  // const workerHandler=()=>{
  //   props.history.push("/addinfopersonal")
  // }
  // const clientHandler=()=>{
  //   props.history.push("/addinfoprofessional")
  // }
  const workerHandler = (children) => {
  props.history.push("/addinfopersonal")
}
  const customerHandleer=()=>{
    props.history.push("/addinfopersonal")
  }
  return (
    <>
    <HomeNav history={props.history}/>
    <div className={classes.root}>
      <Grid container spacing={3} alignContent="center" alignItems="center" justify="center">
        <Grid item xs={3}>
          <Paper><Choice type="Become a Worker" hire="Worker" handleOnClick={workerHandler}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><Choice type="Hire a Domestic Helper" hire="Client" handleOnClick={customerHandleer}/></Paper>
        </Grid>
      
      </Grid>
    </div>
    </>
  );
}
