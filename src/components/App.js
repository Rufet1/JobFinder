import Header from './Header'
import LastAds from './LastAds'
import Category from './Category'
import CategoryMobile from './CategoryMobile'
import DetailAd from './DetailAd'
import Footer from './Footer'
import HomeVacancies from './HomeVacancies'
import HomeUsers from './HomeUsers'
import CategoryAds from './CategoryAds'
import VacanciesAdd from './VacanciesAdd'
import SimiliarAds from './SimiliarAds'
import UserCv from './UserCv'
import NotFound404 from './NotFound404'
import {Route, Router, Switch} from 'react-router-dom'
import history from '../history/history'
import Mycv from './Mycv'
import UpdateProfilForm from './UpdateProfilForm'
import '../style/appStyle.css'
import AllUsers from './AllUsers'

function App() {
  return (
    <Router history={history}>
      <Route path = '/'  component={Header} />
      <Route path = '/' exact component={Category} />
      <Route path = '/' exact component={CategoryMobile} />
      <Route path = '/' exact component={HomeVacancies} />
      <div className="App">
        <Switch>
          <Route path = '/' exact component={HomeUsers} />
          <Route path = '/vacancies' exact component={LastAds} />
          <Route path = '/users' exact component={AllUsers} />
          <Route path = '/category' exact component={CategoryAds} />
          <Route path = '/detail/:id' exact component={DetailAd} />
          <Route path = '/detail/user/:id' exact component={UserCv} />
          <Route path = '/cv' component={Mycv} />
          <Route path = '/update/profile' component={UpdateProfilForm} />
          <Route path = '/vacancies/add' component={VacanciesAdd}/>
          <Route component={NotFound404}/>
        </Switch>
      </div>
      <Route path = '/' component={Footer} />
    </Router>
  );
}

export default App;
