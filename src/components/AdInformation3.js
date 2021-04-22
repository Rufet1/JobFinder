import { Divider, Grid } from '@material-ui/core'
import React from 'react'

const AdInformation3 = (props) => {
  return (
    <Grid item xs={12} sm={6}>
        <Grid container>
            <Grid item xs = {12} sm = {9} >
            <Divider light/>
                <br/>
                <p style={{fontWeight : 'bold'}} >İş barədə məlumat</p>
                <br/>
                <p>- {props.information}</p>
                {/* <p>- Müştəri üçün koordinator rolunu icra etmək; ortaya çıxan problemləri həll etmək</p>
                <p>- Müştəri məmnuniyyəti</p>
                <p>- Satış Müdirini müvafiq qaydada məlumatlandırmaq</p>
                <p>- AR Əmək Məcəlləsinə əsasən sənədləşmə</p>
                <p>- İş saatı 15:00-dan 21:00-dək ( Komendant saatı xaric)</p> */}
            </Grid>
            
        </Grid>
    </Grid>
  )
}

export default AdInformation3
