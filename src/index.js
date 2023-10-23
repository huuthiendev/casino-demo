import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './store';

import TopGames from './pages/TopGames';
import NewGames from './pages/NewGames';
import Slots from './pages/Slots';
import Jackpots from './pages/Jackpots';
import Live from './pages/Live';
import Blackjack from './pages/Blackjack';
import Roulette from './pages/Roulette';
import Table from './pages/Table';
import Poker from './pages/Poker';
import Other from './pages/Other';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <TopGames />,
      },
      { path: 'new-games', element: <NewGames /> },
      { path: 'slots', element: <Slots /> },
      { path: 'jackpots', element: <Jackpots /> },
      { path: 'live', element: <Live /> },
      { path: 'blackjack', element: <Blackjack /> },
      { path: 'roulette', element: <Roulette /> },
      { path: 'table', element: <Table /> },
      { path: 'poker', element: <Poker /> },
      { path: 'other', element: <Other /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
