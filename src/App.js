import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './routes/Login';
import SignIn from './routes/SignIn';
import Home from './routes/Home/Home';
import store from './store'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
