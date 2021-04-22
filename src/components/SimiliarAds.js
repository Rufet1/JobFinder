import { Button, Container, Divider, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import Ad from './Ad'
import Progress from './Progress'



const SimiliarAds = (props) => {
  const {loading,category,id} = props
  return (
    <div className='container'>
    <br/>
        {loading ? <Progress/> : 
        <>{props.ads.slice(0).reverse().filter(ad => ad.category === category)
          .filter(ad => ad.id !== id).length > 0 &&
          <>
            <br/> 
            <Typography variant = 'h4'> Oxşar Elanlar </Typography>
            <Divider/>
            <Grid container spacing={3}>
                {props.ads ? props.ads.slice(0).reverse().filter(ad => ad.category === category).filter(ad => ad.id !== id).map((ad,index) => { if(index < 6) {return <Ad key={ad.id} index={index} {...ad} />}})  : null} 
            </Grid>
          </>}
        </>}      
    </div>
  )
}
const mapStatetoProps = (state) => ({
    ads : state.adsReducer,
    loading : state.homeAdsReducer  
})

export default connect(mapStatetoProps)(SimiliarAds)
