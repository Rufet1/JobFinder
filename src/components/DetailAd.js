import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button, Chip, Divider, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';
import AdInformation1 from './AdInformation1';
import AdInformation2 from './AdInformation2';
import AdInformation3 from './AdInformation3';
import AdInformation4 from './AdInformation4';
import { connect } from 'react-redux';
import SimiliarAds from './SimiliarAds'
import { experiences } from '../database/database';

const useStyles = makeStyles({
    root: {
        minHeight: 500
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
        fontFamily: '-apple-system',
        marginTop: 15
    },
    pos: {
        marginBottom: 12,
    },
});

const OutlinedCard = (props) => {

    const classes = useStyles();
    const {ad} = props
    const duty = ad ? ad.duty :  '-'
    const id = ad ? ad.id :  '-'
    const email = ad ? ad.email :  '-'
    const phone = ad ? ad.phone :  '-'
    const company = ad ? ad.company :  '-'
    const related = ad ? ad.related :  '-'
    const age = ad ? ad.age :  []
    const category = ad ? ad.category :  '-'
    const city = ad ? ad.city :  '-'
    const date = ad ? ad.date :  '-'
    const education = ad ? ad.education :  '-'
    const experience = ad ? ad.experience :  '-'
    const information = ad ? ad.information :  '-'
    const money = ad ? ad.money :  []
    const requirements = ad ? ad.requirements :  []
    console.log(date)
    useEffect(() => {document.documentElement.scrollTop = 1},[])
    return (
        <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ marginTop: 35 }}
        >

            <Grid item xs={12} sm = {10}>
                <Card className={classes.root} style={{ boxShadow: '1px 1px rgb(249, 87, 47)' }} variant="outlined">
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.title} style={{ color: '#F9572F' }}> {duty} </Typography>
                                <Divider style={{ backgroundColor: '#F9572F' }} />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Grid container spacing={3}>
                                    <Grid item xs={8} sm={3}>
                                        <Chip color='secondary' variant='default' style={{ backgroundColor: '#F9572F' }} label={`${money[0]}-${money[1]} AZN`} />
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Link style={{ marginLeft: 8, color: '#F9572F' }} to='#'>{company}</Link>
                                    </Grid>
                                    <Grid item sm={3}>
                                        <Typography variant='subtitle2' style={{ display: 'inline', float: 'right' }}>Baxışların sayı: 598</Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={2}>
                                        <Typography variant='subtitle2' style={{ display: 'inline', float: 'right' }}>Elan id : {id}</Typography>
                                    </Grid>
                                    <Grid style={{ marginLeft: '15px' }} container>
                                        <AdInformation1 date={date} related = {related} age={age} education={education} city = {city} experience = {experience} />
                                        <AdInformation2 phone={phone} email={email} />
                                        <AdInformation3 information={information}/>
                                        <AdInformation4 requirements={requirements}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <br/>
                        <Divider light />
                        <br/>
                        <Grid container >
                            <Grid item ></Grid>
                                <Button style={{backgroundColor : '#F9572F',color : 'white'}} variant="contained" ><i class="fas fa-crown"></i> &nbsp; Elanı premium et</Button>
                            <Grid/>
                        </Grid>
                    </CardContent>
                </Card>
                <SimiliarAds category={category} id = {id}/>
                <br/>
            </Grid>
        </Grid>


    );
}

const mapStatetoProps = (state, props) => ({
    ad : state.adsReducer.find((ad) => {
        return ad.id == props.match.params.id
    })
})

export default connect(mapStatetoProps)(OutlinedCard)