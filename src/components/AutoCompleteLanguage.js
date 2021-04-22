import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    marginTop : '15px'
  },
}));

export default function Tags(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        onChange = {(event, value) =>{props.languageChange(value)}}
        multiple
        id="tags-filled"
        options={topRequirements.map((option) => option.title)}
        freeSolo
        fullWidth
        defaultValue = {props.defVal}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Dil Bilikləri" />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const topRequirements = [
  { title: 'İngilis',},
  { title: 'Rus',},
  { title: 'İspan',},
  { title: 'Alman',},
  { title: 'Çin',},
  { title: 'Fransız',} 
];