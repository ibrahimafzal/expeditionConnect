import './App.css';
import Navbarr from './Components/Navbarr';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './container/Home';

function App() {
  return (
    <Router>
      <Navbarr />
      <Routes>
        <Route path='/' exact element = {<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
