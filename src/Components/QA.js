import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.onChange(event);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onChange={handleChange}>
      <div>
        <TextField
          id="standard-multiline-static"
          label={props.question}
          multiline
          rows={2}
        />
      </div>
    </form>
  );
}
