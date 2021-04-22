import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, Slide } from '@material-ui/core';
import '../style/style.css'
import { Link } from 'react-router-dom';


export default function SimpleCard(props) {
  const {company, duty, money, id, index} = props
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
        <Button onClick={() => {document.documentElement.scrollTop = 1}} to={`/detail/${id}`} style={{width : '100%'}} component={Link}>
          <Card className = 'ad'
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          style = {{
            transform : trans,
            backgroundColor : '#F9572F',
            color : '#D5D5D5',
            transition: '0.5s',
            minHeight : '120px'
          }}
          elevation = {elevation}
          >
          <CardContent>
              <Typography style={{fontSize: 20, color : 'white',textAlign : 'center'}} color="textSecondary" gutterBottom>
              {duty}
              </Typography>
              <Typography style={{textAlign : 'center'}} variant="body2" className='title' component="p">
              {company}
              </Typography>
              <br/>
              <Typography style={{color : '#DEEAEE',textAlign : 'center',fontSize : '15px',color:'white'}} > {`${money[0]} - ${money[1]} AZN`}</Typography>
          </CardContent>
          </Card>
        </Button>
      </Slide>
    </Grid>
  );
}
