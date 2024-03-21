import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { UserContext } from './App';
import React, {useContext } from 'react';


function TooltipFunc() {
  const ctx = useContext(UserContext);
  const handleLogout = (event) => {
    event.preventDefault();
  
    ctx.loggedInUser = null;
  };
  const Link = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <div>{children}</div>
    </OverlayTrigger>
  );
  

  return (
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

    <ul className="navbar-nav">
        <li className="navbar-item" >
          <Link id="login" >
            <a className="nav-link" data-tooltip="So surprised that your back..."aria-current="page"  href="#/Login">Login</a>
        </Link>{' '}
        </li>    
        <li className="navbar-item">
            <Link id="create-account" >
            <a className="nav-link " aria-current="page"  href="#/CreateAccount">Create Account</a>
            </Link>{' '}
        </li>
        <li className="navbar-item">
            <Link id="deposit" >
        <a className="nav-link" aria-current="page" href="#/Deposit">Deposit</a>
             </Link>{' '}
        </li>
        <li className="navbar-item">
        <Link id="withdraw" >
        <a className="nav-link" aria-current="page" href="#/Withdraw">Withdraw</a>
        </Link>{' '}
        </li>
        <li className="navbar-item">
        <Link id="customer-data">
        <a className="nav-link" aria-current="page" href="#/AllData">Customer Data</a>
        </Link>{' '}
        </li>
      
        <li className="navbar-item">
            <Link id="admin" >
        <a className="nav-link" aria-current="page" href="#/Admin">Admin</a>
        </Link>{' '}
        </li>
       
        <li className="navbar-item">
            <Link id="logout" >
        <button className="logout"  onClick={handleLogout} >Logout</button>
        </Link>{' '}
        </li>
        
       
      </ul>
  </div>    
  )
}



export default TooltipFunc;