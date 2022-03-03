import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Link to="">
        <img 
        className='logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/langfr-1920px-International_Pok%C3%A9mon_logo.svg.png"/>
      </Link>
      <Outlet/>
    </div>
  );
}

export default App;
