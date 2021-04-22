import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {setCategory} from '../actions/category'
import { Button, Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { categories, cities, educations, experiences, salaries } from '../database/database';
import { connect } from 'react-redux';
import history from '../history/history';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    title: {
        fontSize: 35,
        fontFamily: '"Apple Color Emoji"',
        color: '#f9572f'
    }
}));

const CategoryElement = (props) => {
    const classes = useStyles();
    const [category, setCategory] = React.useState('');
    const [city, setCity] = React.useState('');
    const [salary, setSalary] = React.useState('');
    const [date, setDate] = React.useState('');
    const [education, setEducation] = React.useState('');
    const [experience, setExperience] = React.useState('');

    const categoryChange = (event) => {
        setCategory(event.target.value);
    };
    const cityChange = (event) => {
        setCity(event.target.value);
    };
    const salaryChange = (event) => {
        setSalary(event.target.value);
    };
    const dateChange = (event) => {
        setDate(event.target.value);
    };
    const educationChange = (event) => {
        setEducation(event.target.value);
    };
    const experienceChange = (event) => {
        setExperience(event.target.value);
    };
    const submitButton = () => {
        props.setCategory({
            category,
            city,
            salary,
            date,
            education,
            experience
        })
        props.openCategory(false)
        history.push('category')
    }

    return (
        <div >
            <Container maxWidth='md'>
                <Card variant='elevation'>
                    <CardContent>
                        <Typography className={classes.title} align='center' variant="h5" component="h2">
                            Kateqoriyalar
                        </Typography>
                        <br/>
                        <Grid container
                            spacing={3}
                            justify="center"
                            style={{ backgroundColor: 'white', color: '#F9572F' }}>
                            <Grid align="center" item xs={6} sm={4}>
                                <FormControl style={{maxWidth : '15px'}} variant='standard' className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Kateqoriya</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={category}
                                        onChange={categoryChange}
                                        label="Age"
                                    >
                                        {
                                            Object.keys(categories).map(cat => categories[cat]
                                            .map(item => {return (
                                                <MenuItem value={item}>{item}</MenuItem>
                                            )}
                                            ))
                                        }
                                        
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid align="center" item xs={6} sm={4}>
                                <FormControl style={{maxWidth : '15px'}} variant='standard' className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Şəhər</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={city}
                                        onChange={cityChange}
                                        label="Age"
                                    >
                                        {
                                            cities.map(city => {return(
                                                <MenuItem value={city}>{city}</MenuItem>
                                            )})
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid align="center" item xs={6} sm={4}>
                                <FormControl style={{maxWidth : '15px'}} variant='standard' className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Əmək haqqı</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={salary}
                                        onChange={salaryChange}
                                        label="Age"
                                    >
                                        {
                                            salaries.map(salary => {return(
                                                <MenuItem value={salary}>minimum {salary} AZN</MenuItem>
                                            )})
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid align="center" item xs={6} sm={4}>
                                <FormControl style={{maxWidth : '15px'}} variant='standard' className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Təhsil</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={education}
                                        onChange={educationChange}
                                        label="Age"
                                    >
                                        {
                                            educations.map(edu => {return(
                                                <MenuItem value={edu}>{edu}</MenuItem>
                                            )})
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid align="center" item xs={6} sm={4}>
                                <FormControl style={{maxWidth : '15px'}} variant='standard' className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">İş təcrübəsi</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={experience}
                                        onChange={experienceChange}
                                        label="Age"
                                    >
                                        {
                                            experiences.map(exp => {return(
                                                <MenuItem value={exp}>{exp}</MenuItem>
                                            )})
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid align="center" item xs={6} sm={4}>
                                <FormControl style={{maxWidth : '15px'}} variant='standard' className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Elan Tarixi</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={date}
                                        onChange={dateChange}
                                        label="Age"
                                    >
                                        <MenuItem value='Son 1 həftə'>Son 1 həftə</MenuItem>
                                        <MenuItem value='Son 2 həftə'>Son 2 həftə</MenuItem>
                                        <MenuItem value='Son 3 həftə'>Son 3 həftə</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid align="center" item xs={12}>
                                <Button onClick = {submitButton} style={{width : '83%'}} color="inherit" variant='contained'> Axtar</Button>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Container>
        </div>

    );
}

const mapDispatchtoProps = {
    setCategory
}

export default connect(null,mapDispatchtoProps)(CategoryElement)