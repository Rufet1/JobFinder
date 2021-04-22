import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiPhoneInput from 'material-ui-phone-number'
import '../style/style.css'
import { Container, Divider, Grid, TextField } from '@material-ui/core';
import { fireStoreDB } from '../firebase/firebaseConfig'
import 'date-fns';
import Auto from './AutoCompleteLanguage'
import AutoCompleteAbility from './AutoCompleteAbility'
import { connect } from 'react-redux';
import history from '../history/refreshHistory'


const UpdateProfil = (props) => {
    const {user,profileUpdate} = props
    const [name, setName] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [university, setUniversity] = React.useState('')
    const [fakulte, setFakulte] = React.useState('')
    const [tecrube, setTecrube] = React.useState('')
    const [career, setCareer] = React.useState('')
    const [twitter, setTwitter] = React.useState('')
    const [linkedin, setLinkedin] = React.useState('')
    const [github, setGithub] = React.useState('')
    const [city, setCity] = React.useState('')
    const [work, setWork] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [language, setLanguage] = React.useState([])
    const [ability, setAbility] = React.useState([])
    const [surname, setSurname] = React.useState('')

    const twitterChange = (e) => {
        setTwitter(e.target.value)
    }
    const linkedinChange = (e) => {
        setLinkedin(e.target.value)
    }
    const githubChange = (e) => {
        setGithub(e.target.value)
    }
    const workChange = (e) => {
        setWork(e.target.value)
    }
    const phoneChange = (e) => {
        setPhone(e)
    }
    const cityChange = (e) => {
        setCity(e.target.value)
    }
    const surnameChange = (e) => {
        setSurname(e.target.value)
    }
    const nameChange = (e) => {
        setName(e.target.value)
    }
    const careerChange = (e) => {
        setCareer(e.target.value)
    }
    const universityChange = (e) => {
        setUniversity(e.target.value)
    }
    const fakulteChange = (e) => {
        setFakulte(e.target.value)
    }
    const tecrubeChange = (e) => {
        setTecrube(e.target.value)
    }
    const autoAbilityChange = (value) => {
        setAbility(value)
    }
    const languageChange = (value) => {
        setLanguage(value)
    }

    useEffect(() => {
        user.name ? setName(user.name) : setName('')
        user.surname ? setSurname(user.surname) : setSurname('')
        user.gender ? setGender(user.gender) : setGender('')
        user.university ? setUniversity(user.university) : setUniversity('')
        user.fakulte ? setFakulte(user.fakulte) : setFakulte('')
        user.tecrube ? setTecrube(user.tecrube) : setTecrube('')
        user.twitter ? setTwitter(user.twitter) : setTwitter('')
        user.linkedin ? setLinkedin(user.linkedin) : setLinkedin('')
        user.github ? setGithub(user.github) : setGithub('')
        user.city ? setCity(user.city) : setCity('')
        user.work ? setWork(user.work) : setWork('')
        user.phone ? setPhone(user.phone) : setPhone('')
        user.career ? setCareer(user.career) : setCareer('')
        user.language ? setLanguage(user.language) : setLanguage('');
        user.ability ? setAbility(user.ability) : setAbility([])

    },[user])

    const formSubmit = (e) => {
        e.preventDefault()
                fireStoreDB.collection('usersCollection').doc(user.uid).update({
                    name,
                    surname,
                    career,
                    tecrube,
                    language,
                    fakulte,
                    university,
                    ability,
                    twitter,
                    linkedin,
                    github,
                    work,
                    city,
                    phone,
                }).then(console.log(fireStoreDB.collection('usersCollection').doc()))
                .then(() => {profileUpdate({name,
                                                surname,
                                                career,
                                                tecrube,
                                                language,
                                                fakulte,
                                                university,
                                                ability,
                                                twitter,
                                                linkedin,
                                                github,
                                                work,
                                                city,
                                                phone})})
                .then(() => history.push('/users'))
    }


    return (
        <div>
            <Container style={{ marginTop: '10vh' }} maxWidth={'xs'}>
                <form onSubmit={formSubmit} >
                    <Typography variant='h4'> Profildə düzəliş et </Typography>
                    <Divider/>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid style={{ marginTop: '15px' }} item xs={6}>
                                    <TextField onChange={nameChange} required value={name} fullWidth label="Ad" name="Name" size="small" variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={6}>
                                    <TextField onChange={surnameChange} required value={surname} fullWidth label="Soyad" name="surname" size="small" variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={12}>
                                    <TextField onChange={cityChange} required value = {city} fullWidth label="Şəhər" name="city" size='small' variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={6}>
                                    <TextField onChange={universityChange} value = {university} fullWidth label="Universitet" name="universitet" size='small' variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={6}>
                                    <TextField onChange={fakulteChange} value = {fakulte} fullWidth label="Fakultə" name="fakultə" size='small' variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={12}>
                                    <TextField onChange={careerChange} value = {career} fullWidth label="Kariyera" name="kariyera" size='medium' variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={6}>
                                    <MuiPhoneInput onChange={phoneChange} required value = {phone} onlyCountries={['az']} defaultCountry='az' label='Telefon nömrəsi' required variant='outlined' />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={6}>
                                    <TextField onChange={workChange} required value = {work} fullWidth label="Axtarılan iş" name="work" size='medium' variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={4}>
                                    <TextField onChange={linkedinChange} value = {linkedin} fullWidth label="Linkedin Profili" name="linkedin" size='small' variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={4}>
                                    <TextField onChange={twitterChange} value = {twitter} fullWidth label="Twitter Profili" name="twitter" size='small' variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={4}>
                                    <TextField onChange={githubChange} value = {github} fullWidth label="Github Profili" name="github" size='small' variant="outlined" />
                                </Grid>
                                <Grid style={{ marginTop: '15px' }} item xs={12}>
                                    <TextField onChange={tecrubeChange} value = {tecrube} fullWidth label="Təcrübə" name="təcrübə" size='medium' variant="outlined" />
                                </Grid>
                                {user.language ? <Grid style={{ marginTop: '15px' }} item xs={12}>
                                    <Auto defVal = {user.language} languageChange={languageChange} />
                                </Grid> : null}                
                                {user.ability ? <Grid style={{ marginTop: '15px' }} item xs={12}>
                                    <AutoCompleteAbility defVal = {user.ability} autoAbilityChange={autoAbilityChange} />
                                </Grid> : null}
                                <Button style={{marginTop : '15px'}} color='primary' type='submit' variant='outlined' fullWidth> Məlumatları yenilə </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
}

const mapStatetoProps = (state) => ({
    user : state.authReducer
})
const mapDispatchtoProps = (dispatch) => {
    return {
        profileUpdate : (updates) => {dispatch({type : 'UPDATE_USER',updates})}
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(UpdateProfil)