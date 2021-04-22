import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Container, DialogActions, DialogTitle, Divider, Grid, makeStyles } from '@material-ui/core';
import { firebase, googleAuthProvider, facebookAuthprovider, fireStoreDB } from '../firebase/firebaseConfig'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '85%',
        },

    },
}));

const LoginForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [disable,setDisable] = useState(false)
    const [passwordError, setPasswordError] = useState('')
    const classes = useStyles()
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const loginWithGoogle = () => {
        firebase.auth().signInWithPopup(googleAuthProvider).then(registeredUser => {
            fireStoreDB.collection('usersCollection').doc(registeredUser.user.$.W).set({
                uid: registeredUser.user.$.W || '',
                name: registeredUser.user.displayName.split(' ')[0] || '',
                surname: registeredUser.user.displayName.split(' ')[1] || '',
                email: registeredUser.user.email || '',
            })
        }).then(props.handleClose).catch(e => console.log(e))
    }
    const loginWithFacebook = () => {
        firebase.auth().signInWithPopup(facebookAuthprovider).then(registeredUser => {
            fireStoreDB.collection('usersCollection').doc(registeredUser.user.$.W).set({
                uid: registeredUser.user.$.W || '',
                name: registeredUser.user.displayName.split(' ')[0] || '',
                surname: registeredUser.user.displayName.split(' ')[1] || '',
                email: registeredUser.user.email || '',
            }).then(props.handleClose).catch(e => console.log(e))
        })
    }
    const loginFormSubmit = (e) => {
        e.preventDefault()
        setDisable(true)
        firebase.auth().signInWithEmailAndPassword(email, password).then(setPasswordError(''), setEmailError(''))
            .catch(e => {
                setDisable(false)
                console.log(e);
                if (e.code == 'auth/wrong-password') {
                    setPasswordError('Şifrə yanlışdır və ya istifadəçi başqa yolla qeydiyyatdan keçmişdir')
                } else if (e.code == 'auth/user-not-found') {
                    setEmailError('İstifadəçi mövcud deyil')
                } else if (e.code == 'auth/too-many-requests') {
                    setPasswordError('Şifrənin səhv daxil edilmə limiti keçildi .Biraz sonra yenidən cəhd edin')
                } else if (e.code == 'auth/network-request-failed') {
                    setPasswordError('İnterneti yoxlayıb yenidən cəhd edin')
                } 
            })
        console.log(passwordError)
    }


    return (
        <>
        <DialogTitle style={{ textAlign: "center" }} > Sayta Giriş</DialogTitle>
        <Divider />
        <form style={{display : 'flex',justifyContent : 'center'}} className={classes.root} onSubmit={loginFormSubmit} >
        <Container>
            <Grid container >
                <Grid style={{ marginTop: '15px',display : 'flex',justifyContent : 'center' }} item xs={12} sm={12}>
                    <Button onClick={loginWithFacebook} color='primary' variant='contained'><i class="fab fa-facebook-f"></i> &nbsp; Facebook ilə daxil ol</Button>
                </Grid>
                <Grid style={{ marginTop: '15px',display : 'flex',justifyContent : 'center'}} item xs={12} sm={12}>
                    <Button onClick={loginWithGoogle} color='inherit' variant='contained'><i class="fab fa-google"></i> &nbsp; Google ilə daxil ol</Button>
                </Grid>
            </Grid>
            <DialogContent>
            <DialogContentText style={{ textAlign: 'center' }} color='inherit'>
                və ya
            </DialogContentText>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6}>
                        <TextField error={emailError.length > 0} required helperText={emailError || null} onChange={onEmailChange} value={email} type='email' fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>
                    <Grid style={{ display : 'flex',justifyContent : 'center' }} item xs={12} sm={6}>
                        <TextField error={passwordError.length > 0} required helperText={passwordError || null} onChange={onPasswordChange} value={password} type='password' fullWidth id="outlined-basic" label="Şifrə" variant="outlined" />
                    </Grid>
                        <Button disabled={disable} style={{marginTop: '15px'}} type='submit' fullWidth justifyContent='end' color='primary' variant='contained'> Daxil ol</Button>
                </Grid>
            </DialogContent>
        </Container>
        </form>
        <DialogActions>
                <Button  onClick={props.loginChange} style = {{color : '#f9572f'}}>
                    Şifrəni unutdunuz ?
                </Button>
        </DialogActions>
        </>
    )
}

export default LoginForm


