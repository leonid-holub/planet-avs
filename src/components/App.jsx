import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.scss';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/home/Home'));
const Articles = lazy(() => import('../pages/articles/Articles'));
const Events = lazy(() => import('../pages/events/Events'));
const History = lazy(() => import('../pages/history/History'));
const Insurance = lazy(() => import('../pages/insurance/Insurance'));
const Internship = lazy(() => import('../pages/internship/Internship'));
const Membership = lazy(() => import('../pages/membership/Membership'));
const Services = lazy(() => import('../pages/services/Services'));
const Studying = lazy(() => import('../pages/studying/Studying'));



function App() {

  return (
    <>
    <Suspense fallback={<Loader />}>
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
        <Route path='/*' element={<Navigate to="/" />}/>
      </Routes>
    </Suspense>
    </>
  )
}

export default App;
