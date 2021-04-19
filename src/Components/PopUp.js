import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import VisibilityIcon from '@material-ui/icons/Visibility';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        
      <button className="btn btn-sm bg-info-light" variant="outlined" color="#31c5f2" onClick={handleClickOpen}>
      <VisibilityIcon fontSize="inherit"/>{" "}
        View

        
      </button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} color="inherit">
              Contract Information
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Looks Good
            </Button>
          </Toolbar>
        </AppBar>
        <List>
        <ListItem button >
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}} primary="Offer Title" secondary={props.order.titleOfOffer} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}}primary="Client Name" secondary={props.order.fullname} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}}primary="Address" secondary={props.order.completeAddress} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}}primary="Phone" secondary={props.order.phone} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}}primary="Contract Situation" secondary={props.order.contractSituation} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}}primary="What is Required?" secondary={props.order.defineyourneeds} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}}primary="Monthly Salary" secondary={props.order.monthlySalary} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}}primary="Nationality" secondary={props.order.nationality} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}}primary="Religion" secondary={props.order.religion} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText style={{display:'flex', flexDirection:"column",alignItems:"center"}}primary="Contract Date" secondary={props.order.selectedDate} />
          </ListItem>
        </List>
      </Dialog>
    </>
  );
}
