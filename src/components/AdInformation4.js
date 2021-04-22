import { Divider, Grid } from '@material-ui/core'
import React from 'react'

const AdInformation4 = (props) => {
  const {requirements} = props
  return (
    <Grid item xs={12} sm={6}>
        <Grid container>
            <Grid item xs = {12} sm = {12} >
            <Divider style = {{backgroundColor : '#F9572F'}}/>
                <br/>
                <p style={{fontWeight : 'bold'}} >Namizədə tələblər</p>
                <br/>
                {requirements.map(req => {
                  return (
                    <p>- {req}</p>
                  )
                })}
            </Grid>
            
        </Grid>
    </Grid>
  )
}

export default AdInformation4
