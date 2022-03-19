import Register from './pages/Register';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
  
            <Route exact path="/register" element={ <Register /> }/>
            <Route exact path='/login' element={ <Login /> } />
            <Route exact path='/' element={ <Dashboard /> } />

          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
