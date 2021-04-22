import { Divider, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {changePage} from '../actions/page'
import Ad from './Ad'
import Pagination from '@material-ui/lab/Pagination';

const LastAds = (props) => {
  const {changePage,currentPage,ads} = props
  const [pageTotal,setPageTotal] = useState(1);
  const pageContent = 10;
  const [sliceAds1,setSliceAds1] = useState(0);
  const [sliceAds2,setSliceAds2] = useState(pageContent);
  const [adsSlice,setAdsSlice] = useState([]);

  const pageChange = (e,p) => {
    changePage(p)
    setAdsSlice(ads.slice(sliceAds1,sliceAds2))
  }

  useEffect(() => {
    setPageTotal(ads.length / pageContent)
    setAdsSlice(ads.slice(sliceAds1,sliceAds2))
    console.log(pageTotal)
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
      <Typography onClick={() => {console.log(currentPage,sliceAds1,sliceAds2)}} variant = 'h4'> Son Elanlar</Typography>
      <Divider style={{maxWidth:'92%'}} />
      <br/>
      <Grid container spacing={3}>
        {adsSlice ? adsSlice.map((ad,index) => {return <Ad key={ad.id} index={index} {...ad} />})  : null}
      </Grid>
      <Pagination page = {currentPage} defaultPage={currentPage} onClick={() => {document.documentElement.scrollTop = 0}}
       showFirstButton showLastButton onChange={pageChange} count={pageTotal} style={{display : 'flex',justifyContent : 'center',marginTop : '15vh'}}
       color="primary" hideNextButton hidePrevButton />
    </div>
  )
}

const mapStatetoProps = (state) => ({
    ads : state.adsReducer.filter(ad => 
        state.categoryReducer.category != '' ? ad.category == state.categoryReducer.category : ad
    ).filter(ad => 
        state.categoryReducer.city != '' ? ad.city == state.categoryReducer.city : ad
    ).filter(ad => 
        state.categoryReducer.education != '' ? ad.education == state.categoryReducer.education : ad
    ).filter(ad => 
        state.categoryReducer.experience != '' ? ad.experience == state.categoryReducer.experience : ad
    ).filter(ad => 
      state.categoryReducer.salary != '' ? ad.money[0] >= state.categoryReducer.salary : ad
    ).filter(ad => 
      state.categoryReducer.date != '' ? ad.money[0] >= state.categoryReducer.salary : ad
    ),
  currentPage : state.pageReducer
})
const mapDispatchtoProps = {
  changePage
}

export default connect(mapStatetoProps,mapDispatchtoProps)(LastAds)
