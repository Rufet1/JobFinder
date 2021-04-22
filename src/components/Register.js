import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MuiPhoneInput from 'material-ui-phone-number'
import '../style/style.css'
import { Container, Grid, ListItem, ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import { firebase, fireStoreDB } from '../firebase/firebaseConfig'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Auto from './AutoCompleteLanguage'
import AutoCompleteAbility from './AutoCompleteAbility'
import { Alert } from '@material-ui/lab';
import ForwardIcon from '@material-ui/icons/Forward';



const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: '#F9572f'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const date = new Date()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorText, setErrorText] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordEText, setpasswordEText] = React.useState('');
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repassword, setRePassword] = React.useState('')
    const [time, setTime] = React.useState(date.setFullYear(date.getFullYear() - 18))
    const [name, setName] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [work, setWork] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [language, setLanguage] = React.useState([])
    const [ability, setAbility] = React.useState([])
    const [surname, setSurname] = React.useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };
    const genderChange = (e) => {
        setGender(e.target.value);
        console.log(gender)
    };

    const handleClose = () => {
        setOpen(false);
    };
    const workChange = (e) => {
        setWork(e.target.value)
    }
    const phoneChange = (e) => {
        setPhone(e)
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const surnameChange = (e) => {
        setSurname(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const rePasswordChange = (e) => {
        setRePassword(e.target.value)
    }
    const nameChange = (e) => {
        setName(e.target.value)
    }
    const onCalendarChange = (date) => {
        setTime(date)
        console.log(time)
    }
    const languageChange = (value) => {
        setLanguage(value)
        console.log(language)
    }
    const autoAbilityChange = (value) => {
        console.log(ability)
        setAbility(value)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        if (password !== repassword) {
            setPasswordError(true)
            setpasswordEText('Şifrələr eyni deyil !')
        } else {
            setPasswordError(false)
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(registeredUser => {
                    fireStoreDB.collection('usersCollection').doc(registeredUser.user.uid).set({
                        uid: registeredUser.user.uid,
                        name,
                        surname,
                        email,
                        gender,
                        language,
                        work,
                        phone,
                        ability,
                        birthday: time
                    })
                }).then(() => { setError(false); setPasswordError(false);handleClose() })
                .catch(e => {
                    switch (e.code) {
                        case 'auth/email-already-in-use':
                            setError(true);
                            setErrorText('Bu email ilə istifadəçi artıq mövcuddur .')
                    }
                })
        }
    }

    return (
        <div>
            <ListItem onClick={handleClickOpen} button >
                <ListItemIcon><ForwardIcon  /></ListItemIcon>
                <ListItemText primary='Qeydiyyat' />
            </ListItem>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Qeydiyyat
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container style={{ marginTop: '10vh' }} maxWidth={'xs'}>
                    <form onSubmit={formSubmit} className={classes.root}>
                        <Typography variant='h4'> Qeydiyyat </Typography>
                        {error && <Alert variant='filled' style={{ width: '100%', marginTop: '15px' }} severity='error'>{errorText}</Alert>}
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Grid container spacing={1}>
                                    <Grid style={{ marginTop: '15px' }} item xs={6}>
                                        <TextField onChange={nameChange} required fullWidth label="Ad" name="Name" size="small" variant="outlined" />
                                    </Grid>
                                    <Grid style={{ marginTop: '15px' }} item xs={6}>
                                        <TextField onChange={surnameChange} required fullWidth label="Soyad" value={surname} name="surname" size="small" variant="outlined" />
                                    </Grid>
                                    <Grid style={{ marginTop: '15px' }} item xs={12}>
                                        <TextField onChange={emailChange} fullWidth required label="Email" name="email" size="small" variant="outlined" />
                                    </Grid>
                                    <Grid style={{ marginTop: '15px' }} item xs={6}>
                                        <TextField onChange={passwordChange} type='password' required fullWidth label="Şifrə" name="email" size="small" variant="outlined" />
                                    </Grid>
                                    <Grid style={{ marginTop: '15px' }} item xs={6}>
                                        <TextField error={passwordError} errorText={passwordEText} onChange={rePasswordChange} type='password' required fullWidth label="Şifrə təkrar" name="email" size="small" variant="outlined" />
                                    </Grid>
                                    <Grid style={{ marginTop: '15px' }} item xs={6}>
                                        <MuiPhoneInput onChange={phoneChange} onlyCountries={['az']} defaultCountry='az' label='Telefon nömrəsi' required variant='outlined' />
                                    </Grid>
                                    <Grid style={{ marginTop: '15px' }} item xs={6}>
                                        <TextField onChange={workChange} required fullWidth label="Axtarılan iş" name="work" size='medium' variant="outlined" />
                                    </Grid>
                                    <Auto languageChange={languageChange} />
                                    <AutoCompleteAbility autoAbilityChange={autoAbilityChange} />
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justify="space-around">
                                            <KeyboardDatePicker
                                                required
                                                margin="normal"
                                                maxDate='01.01.2004'
                                                id="date-picker-dialog"
                                                label="Dogum Tarixi"
                                                format="MM/dd/yyyy"
                                                value={time}
                                                onChange={onCalendarChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />

                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                    <FormControl required component="fieldset">
                                        <FormLabel component="legend">Cinsiyyət</FormLabel>
                                        <RadioGroup defaultValue='female' aria-label="gender" name="gender1" onChange={genderChange}>
                                            <FormControlLabel value="female" control={<Radio />} label="Qadın" />
                                            <FormControlLabel value="male" control={<Radio />} label="Kişi" />
                                        </RadioGroup>
                                    </FormControl>

                                    <Button color='primary' type='submit' variant='contained' fullWidth> Qeydiyyatdan kec </Button>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                        <br/><br/><br/>
                    </form>
                </Container>
            </Dialog>

        </div>
    );
}
