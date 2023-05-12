import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import Favorites from './components/Favorites';

function App() {

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "imano.arias@gmail.com";
   const PASSWORD = "pass123";

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path={`/detail/:id`} element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
