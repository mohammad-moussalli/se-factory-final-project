import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import BoostScholarship from './pages/BoostScholarship';
import Donate from './pages/Donate';
import LaunchScholarship from './pages/LaunchScholarship';
import RecordsPage from './pages/RecordsPage';
import Scholarships from './pages/Scholarships';
import Team from './pages/Team';
import Chat from './pages/Chat';
import Buddies from './pages/FindBuddy';
import Webinars from './pages/Webinars';
import ApplicationForms from './pages/ApplicationForms';
import Faq from './pages/Faq'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/app.css'
import ContactUs from './pages/ContactUs';

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
              <Route exact path='/blog' element={ <Blog /> } />
              <Route exact path='/scholarships/boost' element={ <BoostScholarship /> } />
              <Route exact path='/donate' element={ <Donate /> } />
              <Route exact path='/scholarships/launch' element={ <LaunchScholarship /> } />
              <Route exact path='/records' element={ <RecordsPage /> } />
              <Route exact path='/scholarships' element={ <Scholarships /> } />
              <Route exact path='/team' element={ <Team /> } />
              <Route exact path='/webinars' element={ <Webinars /> } />
              <Route exact path='/applications' element={ <ApplicationForms /> } />
              <Route exact path='/contact-us' element={ <ContactUs /> } />
              <Route exact path='/buddies' element={ <Buddies /> } />
              <Route exact path='/chat' element={ <Chat /> } />


            </Routes>
          </div>
          <Footer />
        </div>
       
      </Router>
    </>
  );
}
export default App;
