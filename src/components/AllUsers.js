import { Divider, Grid, LinearProgress, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {changePage} from '../actions/page'
import Pagination from '@material-ui/lab/Pagination';
import Progress from './Progress'
import User from './User'

const AllUsers = (props) => {
  const {changePage,currentPage,ads} = props
  const [pageTotal,setPageTotal] = useState(1);
  const pageContent = 10;
  const [sliceAds1,setSliceAds1] = useState(0);
  const [sliceAds2,setSliceAds2] = useState(pageContent);
  const [adsSlice,setAdsSlice] = useState([]);
  const {loading} = props

  const pageChange = (e,p) => {
    changePage(p)
    setAdsSlice(ads.slice(sliceAds1,sliceAds2))
  }
  useEffect(() => {
    setPageTotal(Math.ceil(ads.length / pageContent))
    setAdsSlice(ads.slice(sliceAds1,sliceAds2))
  },[ads])
  useEffect(() => {
    setSliceAds1((currentPage * pageContent)-pageContent)
    setSliceAds2(currentPage * pageContent)
  },[currentPage])
  useEffect(() => {
    setAdsSlice(ads.slice(sliceAds1,sliceAds2))
  },[sliceAds1])
  

  
  return (
    <div className='container mt-3'>
      {loading ? <LinearProgress color='primary'/> : 
      <>
        <Typography variant = 'h4'> Bütün Elanlar </Typography>
        <Divider style={{maxWidth:'92%'}} />
        <br/>
        <Grid container spacing={3}>
          { adsSlice && adsSlice.map((ad,index) => {return <User key={ad.id} index={index} {...ad} />}) }
        </Grid>
        <Pagination page = {currentPage} defaultPage={currentPage} onClick={() => {document.documentElement.scrollTop = 0}}
        showFirstButton showLastButton onChange={pageChange} count={pageTotal} style={{display : 'flex',justifyContent : 'center',marginTop : '15vh'}}
        color="primary" hideNextButton hidePrevButton />
       </>}
    </div>
  )
}

const mapStatetoProps = (state) => ({
  ads : state.usersReducer,
  currentPage : state.pageReducer,
  loading : state.homeUsersReducer
})
const mapDispatchtoProps = {
  changePage
}

export default connect(mapStatetoProps,mapDispatchtoProps)(AllUsers)
