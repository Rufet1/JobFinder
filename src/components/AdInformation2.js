import { Grid } from '@material-ui/core'
import React from 'react'

const AdInformation2 = (props) => {
    const {phone,email} = props
  return (
    <Grid item xs={12} sm={6}>
        <Grid container>
            <Grid item xs = {5} sm = {6} >
                <p style={{fontWeight : 'bold'}} >Telefon</p>
            </Grid>
            <Grid item xs = {7} sm = {6} >
                <p>{phone}</p>
            </Grid>
            <Grid item xs = {5} sm = {6} >
                <p style={{fontWeight : 'bold'}} >E-mail</p>
            </Grid>
            <Grid item xs = {7} sm = {6} >
                <p>{email}</p>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default AdInformation2
