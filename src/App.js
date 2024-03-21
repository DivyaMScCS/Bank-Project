import {
    HashRouter,
    Routes,
    Route
  } from 'react-router-dom';
  import NavBar from "./navBar";
  import './App.css'
  import Admin from "./Home";
  import Login from "./Login";
  import CreateAccount from "./CreateAccount";
  import Deposit from "./Deposit";
  import Withdraw from "./Withdraw";
  import AllData from "./AllData";
  import { createContext } from 'react';
  import Home from './homee';

 
  
  
 

 export const UserContext = createContext({
  users: [],
  loggedInUser: '',
  transactions: [],
  
});




  
  function App() {
   
   
return(
      <UserContext.Provider value={{ 
  
      users: [
        {
          username: 'Kanmani', email: 'mani@gmail.com', password: '12345678', balance: 1000,isAdmin: false
        },
        {
          username: 'Affrose', email: 'rose@gmail.com', password: '87654321', balance: 20000,isAdmin: false
        },
        {
          username: 'Sam', email: 'sam@gmail.com', password: '87654321', balance: 10,isAdmin: false
        },{
          username: 'Winnie', email: 'Win@gmail.com', password: '87654321', balance: 20000,isAdmin: false
        },
        {
          username: 'Priya', email: 'priya@gmail.com', password: '87654321', balance: 1000000,isAdmin: false
        },
        {
          username: 'Divya',
          email: 'divi@gmail.com',
          password: 'divimin1810',
          balance: 10000,
          isAdmin: true,
        }
      ]
      }}
     
      >
      <HashRouter>
      <div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>
        <NavBar/>
              <Routes>
              <Route path="/" exact          element={<Home />} />

                <Route path="/Home" exact          element={<Home />} />
                <Route path="/CreateAccount" element={<CreateAccount />} />
                <Route path="/Deposit"        element={<Deposit />} />
                <Route path="/Withdraw"       element={<Withdraw />} />
                <Route path="/AllData"       element={<AllData />} />
                <Route path="/Login"       element={<Login />} />
                
                <Route path="/Admin"       element={<Admin />} />
              </Routes>
      </HashRouter>
     
            </UserContext.Provider>

          
    );
  }
  
  export default App;