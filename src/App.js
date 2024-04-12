import './App.css';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Welcome/>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
