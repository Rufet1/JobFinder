import { Button, Container, DialogActions, DialogTitle, Divider, TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useState } from 'react'
import firebase from 'firebase'

const ResetPassword = (props) => {

  const [email,setEmail] = useState('')
  const [errorText,setErrorText] = useState('')
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState(false)
  const emailChange = e => setEmail(e.target.value)
  const onFormSubmit = (e) => {
      e.preventDefault()
      firebase.auth().sendPasswordResetEmail(email).then(() => {setSuccess(true); setError(false)}).catch((e) => {console.log(e); setError(true); setErrorText(e.message); setSuccess(false)})
  }

  return (
    <>
        <DialogTitle style={{ textAlign: "center" }} > Şifrəni dəyiş </DialogTitle>
        <Divider />
        <br/>
        <Container maxWidth='xs'>
            <form onSubmit={onFormSubmit}>
                {error && <Alert severity="error">{errorText}</Alert>} 
                {success && <Alert severity='success'>Email uğurla göndərildi !</Alert>} 
                <br/>
                <TextField onChange={emailChange} helperText = 'Şifrəni yeniləmək üçün link göndəriləcək' label='Email' variant='outlined' fullWidth/>
                <Button type='submit' style={{marginTop : '15px'}} fullWidth color='primary' variant='outlined'> email gonder </Button>
            </form>
        </Container>

        <DialogActions>
            <Button onClick={props.loginChange} style ={{color : '#f9572f'}}>
                        Giriş et
            </Button>  
        </DialogActions>
    </>
  )
}

export default ResetPassword
