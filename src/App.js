import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './routes/Login';
import SignIn from './routes/SignIn';
import Home from './routes/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
