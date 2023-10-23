import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import { fetchGames } from './features/game';
import { fetchJackpots } from './features/jackpot';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('GAME_API: ', process.env.REACT_APP_GAME_API)
    dispatch(fetchGames());

    setInterval(() => {
      dispatch(fetchJackpots());
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
