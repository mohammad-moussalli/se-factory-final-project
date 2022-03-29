import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import BecomeBuddy from './pages/BecomeBuddy';
import Blog from './pages/Blog';
import BoostScholarship from './pages/BoostScholarship';
import CvTips from './pages/CvTips';
import Donate from './pages/Donate';
import FindBuddy from './pages/FindBuddy';
import JoinTeam from './pages/JoinTeam';
import LaunchScholarship from './pages/LaunchScholarship';
import RecordsPage from './pages/RecordsPage';
import Scholarships from './pages/Scholarships';
import Team from './pages/Team';
import Webinars from './pages/Webinars';
import Volunteer from './pages/Volunteer';
import ApplicationForms from './pages/ApplicationForms';
import Faq from './pages/Faq'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/app.css'

function App() {
  return (
    <>
    
      <Router>
      
        <div className="App">
          <Header />
          <div className='main-container'>
            <Routes>
              <Route exact path='/' element={ <Home /> } />
              <Route exact path="/register" element={ <Register /> }/>
              <Route exact path='/login' element={ <Login /> } />
              <Route exact path='/dashboard' element={ <Dashboard /> } />
              <Route exact path='/menu' element={ <Menu /> } />
              <Route exact path='/faq' element={ <Faq /> } />
              <Route exact path='/about-us' element={ <AboutUs /> } />
              <Route exact path='/volunteer/buddy' element={ <BecomeBuddy /> } />
              <Route exact path='/blog' element={ <Blog /> } />
              <Route exact path='/scholarships/boost' element={ <BoostScholarship /> } />
              <Route exact path='/cv' element={ <CvTips /> } />
              <Route exact path='/donate' element={ <Donate /> } />
              <Route exact path='/buddy/find' element={ <FindBuddy /> } />
              <Route exact path='/volunteer/team' element={ <JoinTeam /> } />
              <Route exact path='/scholarships/launch' element={ <LaunchScholarship /> } />
              <Route exact path='/records' element={ <RecordsPage /> } />
              <Route exact path='/scholarships' element={ <Scholarships /> } />
              <Route exact path='/team' element={ <Team /> } />
              <Route exact path='/webinars' element={ <Webinars /> } />
              <Route exact path='/volunteer' element={ <Volunteer /> } />
              <Route exact path='/applications' element={ <ApplicationForms /> } />
            </Routes>
          </div>
          <Footer />
        </div>
       
      </Router>
    </>
  );
}
export default App;
