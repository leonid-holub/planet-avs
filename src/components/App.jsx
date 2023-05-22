import { Route, Routes, Navigate } from 'react-router-dom';

import './App.scss';
import Home from '../pages/home/Home.jsx';
import Articles from '../pages/articles/Articles';
import Events from '../pages/events/Events';
import History from '../pages/history/History';
import Insurance from '../pages/insurance/Insurance';
import Internship from '../pages/internship/Internship';
import Membership from '../pages/membership/Membership';
import Services from '../pages/services/Services';
import Studying from '../pages/studying/Studying';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/history' element={<History />}/>
      <Route path='/membership' element={<Membership />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/studying' element={<Studying />}/>
      <Route path='/internship' element={<Internship />}/>
      <Route path='/insurance' element={<Insurance />}/>
      <Route path='/articles' element={<Articles />}/>
      <Route path='/events' element={<Events />}/>
      <Route path='*' element={<Navigate to="/" />}/>
    </Routes>
    </>
  )
}

export default App;
