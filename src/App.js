
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';

function App() {

  return (
    <>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
       </Routes>
    </>
  );
}

export default App;
