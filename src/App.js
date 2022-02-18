import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {


  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }


  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/" element={<Login showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>

      </NoteState>
    </>
  );
}

export default App;