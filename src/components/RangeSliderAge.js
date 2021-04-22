import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

function valuetext(value) {
  return `${value} AZN`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.setAge(newValue)
  };

  return (
    <div style={{marginTop : "10px"}} className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        {props.title}
      </Typography>
      <Slider
        value={value}
        max={props.max}
        min={props.min}
        step={props.step}
        color = 'primary'
        onChange={handleChange}
        valueLabelDisplay='on'
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        style={{marginTop : '30px'}}
      />
      <Divider/>
    </div>
  );
}