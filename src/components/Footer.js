import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {Hidden } from '@material-ui/core';

function Copyright() {
  return (
    <Typography style={{display : 'flex',justifyContent : 'center',alignItems : 'flex-start',marginTop : '45px'}} variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Jobfinder.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const FooterInfos = () => {
    return (
        <div style={{display : 'flex',justifyContent : 'space-around',alignItems : 'flex-start'}}>
            <Hidden smDown>
                <div style={{display : 'flex',flexDirection : 'column'}}>
                    <Link variant='subtitle1' component='button' color='inherit' >JOBFINDER.COM</Link> 
                    <Link variant='body2' component='button' color='inherit'>Şirkətlər</Link>     
                    <Link variant='body2' component='button' color='inherit'>Bloq</Link>     
                    <Link variant='body2' component='button' color='inherit'>Qaydalar</Link>     
                    <Link variant='body2' component='button' color='inherit'>Saytda Reklam</Link>     
                </div>
                <div style={{display : 'flex',flexDirection : 'column'}}>
                    <Typography variant='subtitle1' color='inherit' >SAYTDA OLAN ELANLAR</Typography> 
                    <Link variant='body2' component='button' color='inherit'>Bütün vakansiyalar</Link>     
                    <Link variant='body2' component='button' color='inherit'>Bütün CV-lər</Link>     
                    <Link variant='body2' component='button' color='inherit'>Elan yerləşdir</Link>     
                </div>
                <div style={{display : 'flex',flexDirection : 'column'}}>
                    <Typography variant='subtitle1' color='inherit' >ELAN NÖVLƏRİ</Typography> 
                    <Link variant='body2' component='button' color='inherit'>Frilans işlər</Link>     
                    <Link variant='body2' component='button' color='inherit'>Part-time işlər</Link>     
                    <Link variant='body2' component='button' color='inherit'>Təcrübə proqramları</Link>     
                    <Link variant='body2' component='button' color='inherit'>Frilanserlər</Link>     
                </div>
            </Hidden>
            <div style={{display : 'flex',justifyContent : 'space-around',alignItems : 'flex-start'}}>
                <Link variant='h5' style={{color : 'white',marginRight : '15px',transition : '0.3s'}} component='button' ><i class="fab fa-facebook-square"></i></Link>     
                <Link variant='h5' style={{color : 'white',marginRight : '15px',transition : '0.3s'}} component='button' ><i class="fab fa-instagram"></i></Link>
                <Link variant='h5' style={{color : 'white',marginRight : '15px',transition : '0.3s'}} component='button' ><i class="fab fa-linkedin"></i></Link>     
                <Link variant='h5' style={{color : 'white',marginRight : '15px',transition : '0.3s'}} component='button' ><i class="fab fa-telegram-plane"></i></Link>     
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    minHeight : '200px',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
            <FooterInfos/>
            <Copyright />
      </footer>
    </div>
  );
}