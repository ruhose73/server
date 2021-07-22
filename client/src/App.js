import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {AppRouter} from './components/Router/AppRouter'

export default function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
    </div>
  );
}

