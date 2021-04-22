import { Button, Container, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import User from './User'
import ProgressBlue from './ProgressBlue'

const HomeVacancies = (props) => {
  const {loading} = props
  return (
    <div className='container'> 
          {loading ? <div style={{marginTop : '300px'}}><ProgressBlue/></div> : <>
          <br/> 
          <Typography variant = 'h4'> Son Elanlar </Typography>
          <Divider/>
          <br/>
          <Grid container spacing={3}>
            {props.users ? props.users.map((ad,index) => { if(index < 6) {return <User key={ad.id} index={index} {...ad} />}})  : null} 
          </Grid>
          <Container maxWidth='sm' style={{marginTop:'15px'}}>
            <Button style={{color : '#4FD2B3'}} fullWidth size='medium' onClick={() => {document.documentElement.scrollTop = 0}} component={Link} to='users' variant='outlined'> Hamısına bax  </Button>
          </Container>
          </>} 
    </div>
  )
}

const mapStatetoProps = (state) => ({
    users : state.usersReducer,
    loading : state.homeUsersReducer
})

export default connect(mapStatetoProps)(HomeVacancies)
