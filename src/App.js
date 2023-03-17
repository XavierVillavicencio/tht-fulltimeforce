import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './layouts/Main.js';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Commits from './pages/Commits';
import Notfound from './pages/Notfound';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
          <Route index element={<Main include={<Home />} />}></Route>
          <Route exact path='/profile' element={<Main include={<Profile />} />}></Route>
          <Route exact path='/commits' element={<Main include={<Commits />} />}></Route>
          <Route exact path='/commit/:id' element={<Main include={<Details />} />}></Route>
          <Route path='*' exact={true} element={<Main include={<Notfound />} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
