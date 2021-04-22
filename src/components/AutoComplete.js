import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags(props) {
  const classes = useStyles();

  return (
    <div style={{marginTop : '15px',width : '105%'}} className={classes.root}>
      <Autocomplete
        onChange = {(event, value) =>{props.requirementsChange(value)}}
        multiple
        id="tags-filled"
        options={topRequirements.map((option) => option.title)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField style={{maxWidth : '95%'}} {...params} variant="outlined" label="Namizədə tələblər" placeholder="Tələbər..." />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const topRequirements = [
  { title: 'Ünsiyyət qabiliyyəti',},
  { title: 'Pozitiv olmaq',},
  { title: 'Müştəri ehtiyaclarını müəyyən etmək',},
  { title: 'Müştəri yönülmü düşüncə tərzi',},
  { title: 'Verilmiş tapşırıqları vaxtında və effektiv yernə yetirmək bacarığı',},
  { title: 'Rus dili',},
  { title: 'İngilis dili',},
  { title: ' Bəy və Xanım namizəd',},
  
];