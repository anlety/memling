
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
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
       </Routes>
    </>
  );
}

export default App;
