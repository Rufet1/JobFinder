import React from 'react'
import VacancieForm from './VacancieForm'
import Rules from './Rules'
import { Container, Grid } from '@material-ui/core'

const VacanciesAdd = () => {
  return (
    <div>
    <Container maxWidth='md'>
      <Grid style={{marginTop : '15px'}} container spacing={2}>
          <Grid item xs = {12} sm = {7}>
              <VacancieForm/>
          </Grid>
          <Grid item sm = {5}>
              <Rules/>
          </Grid>   
      </Grid>  
    </Container>
    </div>
  )
}

export default VacanciesAdd
