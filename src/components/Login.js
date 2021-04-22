import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ListItem,  ListItemIcon,  ListItemText } from '@material-ui/core';
import LoginForm from './LoginForm'
import ResetPassword from './ResetPassword';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Login = () => {
    const [open, setOpen] = React.useState(false);
    const [login, setLogin] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loginChange = () => {
        setLogin(!login)
    }

    return (

        <div>
            <ListItem onClick={handleClickOpen} button >
                <ListItemIcon><DoubleArrowIcon  /></ListItemIcon>
                <ListItemText primary='Sayta daxil ol' />
            </ListItem>
            <Dialog fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle style={{ color: '#F9572F', textAlign: 'center' }} id="form-dialog-title">JOBFINDER.COM</DialogTitle>
                {
                    login ? <LoginForm loginChange={loginChange} handleClose={handleClose}/> : <ResetPassword loginChange={loginChange}/>
                }
            </Dialog>
        </div>
    );
}

export default Login