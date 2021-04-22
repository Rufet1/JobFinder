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
        onChange = {(event, value) =>{props.autoAbilityChange(value)}}
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
          <TextField {...params} variant="outlined" label="Bilik və Bacarıqlar" />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const topRequirements = [
  { title: 'Microsoft Excel'},
  { title: 'Microsoft Word'},
  { title: 'Microsoft PowerPoint'},
  { title: 'Linux'},
  { title: 'Python'},
  { title: 'Javascript'},
  { title: 'Html5'},
  { title: 'Css3'},
  { title: 'Sass'},
  { title: 'Django'},
  { title: 'Java'} 
];