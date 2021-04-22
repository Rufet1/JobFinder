import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const AdInformation1 = (props) => {
    const [day,setDay] = useState(1)
    const [month,setMonth] = useState('-')
    const [year,setYear] = useState(2021)
    const months = ['Yanvar','Fevral','Mart','Aprel','May','İyun','İyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr']
    useEffect(() => {
        if ( typeof props.date == 'object' ){
            const year = new Date(props.date.toMillis() || props.date);
            console.log(year)
            setYear(year.getFullYear());
            setMonth(months[year.getMonth()]);
            setDay(year.getDate());
            console.log(month)
        }
    })
    const {age,education,related,city,experience} = props
  return (
    <Grid item xs={12} sm={6}>
        <Grid container>
            <Grid item xs = {5} sm = {6} >
                <p style={{fontWeight : 'bold'}} >Şəhər</p>
            </Grid>
            <Grid item xs = {7} sm = {6} >
                <p>{city}</p>
            </Grid>
            <Grid item xs = {5} sm = {6} >
                <p style={{fontWeight : 'bold'}} >Yaş</p>
            </Grid>
            <Grid item xs = {7} sm = {6} >
                <p>{age[0]} - {age[1]} yaş</p>
            </Grid>
            <Grid item xs = {5} sm = {6} >
                <p style={{fontWeight : 'bold'}} >Təhsil</p>
            </Grid>
            <Grid item xs = {7} sm = {6} >
                <p>{education}</p>
            </Grid>
            <Grid item xs = {5} sm = {6} >
                <p style={{fontWeight : 'bold'}} >İş təcrübəsi</p>
            </Grid>
            <Grid item xs = {7} sm = {6} >
                <p>{experience}</p>
            </Grid>
            <Grid item xs = {5} sm = {6} >
                <p style={{fontWeight : 'bold'}} >Elanın tarixi</p>
            </Grid>
            <Grid item xs = {7} sm = {6} >
                <p>{`${day} ${month} ${year}`}</p>
            </Grid>
            <Grid item xs = {5} sm = {6} >
                <p style={{fontWeight : 'bold'}} >Əlaqədar şəxs : </p>
            </Grid>
            <Grid item xs = {7} sm = {6} >
                <p>{related}</p>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default AdInformation1
