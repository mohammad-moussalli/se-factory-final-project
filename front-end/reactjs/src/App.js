import Register from './pages/Register';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    
      <Router>
      <Header />
        <div className="App">
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path="/register" element={ <Register /> }/>
            <Route exact path='/login' element={ <Login /> } />
            <Route exact path='/dashboard' element={ <Dashboard /> } />
            <Route exact path='/menu' element={ <Menu /> } />

          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}
export default App;
