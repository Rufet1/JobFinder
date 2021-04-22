import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Slide } from '@material-ui/core';
import '../style/style.css'
import { Link } from 'react-router-dom';


export default function SimpleCard(props) {
  const {name, surname, work, uid, index} = props
  const [trans,setTrans] = useState('scale(1)')
  const isLeft = index % 2 !== 0 ? 'left' : 'right'
  const [elevation,setElevation] = useState(0)
  const mouseOver = () => {
      setTrans('scale(1.03)')
      setElevation(20)
  }
  const mouseOut = () => {
    setTrans('scale(1)')
    setElevation(0)
  }

  return (
      <Grid item xs = {12} sm = {6}> 
      <Slide direction={isLeft} in={true}>
      <Button to={`detail/user/${uid}`} style={{width : '100%'}} component={Link}>
        <Card className = 'ad'
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style = {{
          transform : trans,
          display : 'flex',
          justifyContent : 'center',
          backgroundColor : '#4FD2B3',
          color : 'white',
          transition: '0.5s',
          minHeight : '120px'
        }}
        elevation = {elevation}
         >
        <CardContent>
            <Typography style={{fontSize: 20, color : 'white'}} color="textSecondary" gutterBottom>
            {work}
            </Typography>
            <Typography variant="body2" className='title' component="p">
            {name} {surname}
            </Typography>
            <br/>
        </CardContent>
        </Card>
      </Button>
      </Slide>
    </Grid>
  );
}
