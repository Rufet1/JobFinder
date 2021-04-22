import { Button, Checkbox, Container, FormControl, Grid, InputLabel, Paper, Select, TextareaAutosize, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import {categories,cities,educations,experiences} from '../database/database'
import { fireStoreDB } from '../firebase/firebaseConfig'
import Tags from './AutoComplete'
import RangeSlider from './RangeSlider'
import RangeSliderAge from './RangeSliderAge'
import {uid} from 'uid'
import MuiPhoneInput from 'material-ui-phone-number'
import { connect } from 'react-redux'
import history from '../history/history'
import { Alert } from '@material-ui/lab'


const VacancieForm = (props) => {
  const [category,setCategory] = useState('')
  const [duty,setDuty] = useState('')
  const [email,setEmail] = useState('')
  const [city,setCity] = useState('')
  const [money,setMoney] = useState([])
  const [age,setAge] = useState([])
  const [education,setEducation] = useState('')
  const [experience,setExperience] = useState('')
  const [requirements,setRequirements] = useState([])
  const [information,setInformation] = useState('')
  const [company,setCompany] = useState('')
  const [related,setRelated] = useState('')
  const [phone,setPhone] = useState('')
  const [alert,setAlert] = useState(false)


  const categoryChange = (e) => {
    setCategory(e.target.value)
  }
  const phoneChange = (e) => {
    setPhone(e)
  }
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const dutyChange = (e) => {
    setDuty(e.target.value)
  }
  const cityChange = (e) => {
    setCity(e.target.value)
  }
  const educationChange = (e) => {
    setEducation(e.target.value)
  }
  const experienceChange = (e) => {
    setExperience(e.target.value)
  }
  const informationChange = (e) => {
    setInformation(e.target.value)
  }
  const companyChange = (e) => {
    setCompany(e.target.value)
  }
  const relatedChange = (e) => {
    setRelated(e.target.value)
  }
  const requirementsChange = (e) => {
    setRequirements(e)
  }
  const id = uid()

  const formSubmit = (e) => {
    if(money.length === 0){
      e.preventDefault()
      setAlert(true)
      document.documentElement.scrollTop = 1
    }else{
      e.preventDefault()
      fireStoreDB.collection('adsCollection').doc(id).set({
        category,
        duty,
        city,
        money,
        age,
        education,
        experience,
        requirements,
        information,
        related,
        company,
        id,
        email,
        phone,
        date : new Date()
      }).then(() => { props.setAd({category,duty,city,money,age,education,experience,requirements,
        information,related,company,id,email,phone, date : new Date().getTime() }) } )
        .then(() => {history.push('/vacancies')})
      } 
  }

  return (
    <div>
      <Paper elevation={3}>
      {alert && <Alert severity="error" variant='filled' > Maaş bölməsini qeyd edin . </Alert>}
        <Container>
        <Typography style={{color:'#F9572F',margin : '15px',display : 'flex'}} variant='h5'>Elan</Typography>
          <form onSubmit = {formSubmit}>
              <FormControl required fullWidth variant='outlined'>
              <InputLabel id='category'>Kateqoriyalar</InputLabel>
              <Select labelId='category' label='Kateqoriyalar' onChange = {categoryChange} required fullWidth variant='outlined' native id="category">
                <option aria-label="None" value="" />
                {Object.keys(categories).map(cat => {return (
                    <optgroup label = {cat}>
                        {
                            Object.keys(categories[cat]).map(item=>{return (
                                <option value={categories[cat][item]}>{categories[cat][item]}</option>
                            )})
                        }
                    </optgroup>
                )})}
              </Select>
              </FormControl>
              <TextField inputProps={{ maxLength: 19 }} onChange={dutyChange} style={{marginTop : '15px'}} required fullWidth variant='outlined' label='Vəzifə'/> 
              <FormControl required style={{marginTop : '15px'}} fullWidth variant='outlined'>
              <InputLabel id='city'>Şəhər</InputLabel>
              <Select labelId='city' label='Şəhər' onChange = {cityChange}  required fullWidth variant='outlined' native id="city">
                <option aria-label="None" value="" />
                {cities.map(city => {return(
                    <option value={city}>{city}</option>
                )})}

              </Select>
              </FormControl>
              {/* <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              /> */}
              <RangeSlider setMoney={setMoney} min = {100} title="Maaş aralığı (manat)" max={5000} step = {100}/>
              <RangeSliderAge setAge={setAge} min = {18} title="Yaş aralığı" max={65} step = {1}/>
              <Grid container spacing={2}>
                  <Grid style={{marginTop : '15px'}} item xs={12} sm={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="demo-simple-select-outlined-label">Təhsil</InputLabel>
                      <Select labelId="demo-simple-select-outlined-label" label="Təhsil" onChange={educationChange} required fullWidth variant='outlined' native id="education">
                          <option aria-label="None" value="" />
                          {educations.map(education => {return(
                              <option value={education}>{education}</option>
                          )})}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                  <FormControl fullWidth variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">Təcrübə</InputLabel>
                    <Select onChange={experienceChange} label="Təcrübə" required fullWidth variant='outlined' native id="experience">
                        <option aria-label="None" value="" />
                        {experiences.map(experience => {return(
                            <option value={experience}>{experience}</option>
                        )})}
                    </Select>
                  </FormControl>
                  </Grid>
              </Grid>
              <Tags requirementsChange={requirementsChange} />
              <TextareaAutosize onChange={informationChange} style={{marginTop : '15px',width: '100%'}} rowsMin = {5} aria-label="maximum height" placeholder=" İş barədə məlumat"/>
              <MuiPhoneInput onChange={phoneChange} style={{marginTop : '15px',width : '100%'}} onlyCountries={['az']} defaultCountry='az' label='Telefon nömrəsi' required variant='outlined'/>
              <TextField onChange={companyChange} style={{marginTop : '15px'}} required fullWidth variant='outlined' label='Şirkətin adı'/>
              <TextField onChange={relatedChange} style={{marginTop : '15px'}} required fullWidth variant='outlined' label='Əlaqədar şəxs'/>
              <TextField onChange={emailChange} style={{marginTop : '15px',marginBottom : '15px'}} type='email' required fullWidth variant='outlined' label='Email'/>
              <Button type='submit' style={{marginTop : '15px',float : 'right'}} color='secondary' variant='contained'> Əlavə et </Button>

          </form>
          </Container>
      </Paper>
    </div>
  )
}

const mapDispatchtoProps = (dispatch) => ({
  setAd : ads => dispatch({ type : 'GET_ADS', ads })
})

export default connect(null,mapDispatchtoProps)(VacancieForm)
