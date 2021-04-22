import { Button, Container, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Ad from './Ad'
import Progress from './Progress'

const HomeVacancies = (props) => {
  const {loading} = props
  return (
    <div className='container'>
        {loading ? <Progress/> : 
        <>
          <br/> 
          <Typography variant = 'h4'> Son Elanlar </Typography>
          <Divider/>
          <Grid container spacing={3}>
          {props.ads ? props.ads.slice(0).reverse().map((ad,index) => { if(index < 6) {return <Ad key={ad.id} index={index} {...ad} />}})  : null} 
          </Grid>
          <Container maxWidth='sm' style={{marginTop:'15px'}}>
              {props.ads !== [] && <Button style={{color : '#F9572F'}} fullWidth size='medium' onClick={() => {document.documentElement.scrollTop = 0}} component={Link} to='vacancies' variant='outlined'> Hamısına bax  </Button>}
          </Container>
        </>}       
    </div>
  )
}

const mapStatetoProps = (state) => ({
    ads : state.adsReducer,
    loading : state.homeAdsReducer
})

export default connect(mapStatetoProps)(HomeVacancies)
