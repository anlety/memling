
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Offers from './pages/Offers';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import { Route, Routes } from "react-router-dom"
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from './pages/CreateListing';

function App() {

  return (
    <>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<PrivateRoute/>}>
           <Route path='/profile' element={<Profile/>}/>
        </Route>
       
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/createListing' element={<CreateListing/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
       </Routes>
       <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  );
}

export default App;
