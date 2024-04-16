import './App.css';
import { useState } from 'react';
import Eventtypes from './Components/Eventtypes';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [history, setHistory] = useState(null);

  return (
    // <div className="App">
    //   <Welcome/>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup history={setHistory}/>}/>
        <Route path='/eventtypes' element={<Eventtypes/>}/>
      </Routes>
    </Router>
  );
}

export default App;
