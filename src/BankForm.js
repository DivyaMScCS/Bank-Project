import React        from 'react';
import { useState, useContext } from 'react';
import { UserContext } from './App';
import { Button, Container } from 'react-bootstrap';


function BankForm({formName, hideEmail}){
  const ctx = useContext(UserContext);

  
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [amount, setAmount] = useState('');
  const [dataDisabled, setDataDisabled] = useState(false);
  

  const clearFields = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  }

  
  const handleFormSubmit = (event) => {
    event.preventDefault();

      

    setErrorMessage('');
    const userExists = ctx.users.find(user => user.username === username);
    const userEmailExists = ctx.users.find(user => user.email === email);
   
    if (formName === "Home") {
      return (
        <>
        New banking Practices to change the industry
        </>
      )
    }
    
    if (formName === "Login" ) { 
      
     
   

      if (!userExists) {
        setErrorMessage('This is not a user.');
        return;
      }

      if (userExists.password !== password) {
        setErrorMessage('Please enter a correct password.');
        return;
      }
      if (userExists.isAdmin) {
        setSuccessMessage(`You are logged in as admin ${userExists.username}`);
      } else {
        setSuccessMessage(`You are logged in as ${userExists.username}`);
      }
      ctx.loggedInUser = username;   

     
    }


    if (formName === "Create Account") {
      if (userExists || userEmailExists) {
        setErrorMessage('This user or email has already been registered. Please log in.');
        return;
      }
    
      if (!username) {
        setErrorMessage('You must enter a username.');
        setSuccessMessage('');
        return;
      }
    
      if (!email) {
        setErrorMessage('Please enter your email address.');
        setSuccessMessage('');
        return;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        setErrorMessage('Please enter a valid email address.');
        setSuccessMessage('');
        return;
      }
    
      if (password.length < 8) {
        setErrorMessage('Password must be at least 8 characters long.');
        setSuccessMessage('');
        return;
      }
    
      ctx.users.push({ "username": username, "email": email, "password": password, "balance": 100 });
    
      ctx.loggedInUser = username;
    
      clearFields();
      setSuccessMessage('Welcome to Grow Bank ' + username);
    }
    
   if (formName === "Deposit" || formName === "Withdraw") {
  // Handle Deposit / Withdraw
  if (amount) {
   

    const currentUser = ctx.users.find(user => user.username === ctx.loggedInUser);
    let prevBalance = currentUser.balance;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setErrorMessage('Please enter a valid positive amount.');
      return;
    }

    if (formName === "Deposit") {
      currentUser.balance = Number(prevBalance) + Number(amount);
      setSuccessMessage(`Successfully deposited $${amount} into your account. New balance: $${currentUser.balance}`);
    } else /* withdraw */ {
      // Check if the withdrawal amount is positive
      if (Number(amount) > 0) {
        if (currentUser.balance >= Number(amount)) {
          currentUser.balance = Number(prevBalance) - Number(amount);
          setSuccessMessage(`Successfully withdrew $${amount} from your account. New balance: $${currentUser.balance}`);
        } else {
          setErrorMessage(`Transaction failed, you can't withdraw more than your account balance.`);
          return;
        }
      } 
    }

  
    
    setAmount('');
  } else {
    setErrorMessage('Please enter an amount first.');
    return;
  }
}

 
  }


  const renderFormInputs = () => {
    if (formName === "Deposit" || formName === "Withdraw") {
      if (ctx.loggedInUser) {
       

        const balanceChange = (e) => {
          setAmount(e.currentTarget.value);
          setDataDisabled(e.currentTarget.value);
        }
  

        const currentUser = ctx.users.find(user => user.username === ctx.loggedInUser);
        return (

          <Container className='container'>
            <div className="form-group">
              <p className="mt-3 text-success user"data-testid="username">Account Balance: ${currentUser.balance}</p>
              Amount<br/>
              <input type="number" className="form-control" id="amount"
              value={amount} min="0" max={currentUser.balance} onChange={balanceChange} /><br/>
            </div>
            <Button type="submit" className="btn btn-outline-success" onClick={handleFormSubmit}disabled={!dataDisabled}>{formName}</Button>
          </Container>
        )
      }
      else {
        return 'Please log in.';
      }
    }
    else
    {

      const emailChange = (e) => {
        setEmail(e.currentTarget.value);
        setDataDisabled(e.currentTarget.value);
      }

      const passwordChange = (e) => {
        setPassword(e.currentTarget.value);
        setDataDisabled(e.currentTarget.value);
      }

      const userNameChange = (e) => {
        setUsername(e.currentTarget.value);
        setDataDisabled(e.currentTarget.value);
      }


      return (
        <Container className='container'>

          <div className="form-group">
            Name<br/>
            <input type="input" className="form-control input" id="name"
            placeholder="Username" value={username} onChange={userNameChange} /><br/>
          </div>
          {!hideEmail && (
            <div className="form-group">
              Email<br/><input type="input" className="form-control input" id="email"
              placeholder="Email" value={email} onChange={emailChange} /><br/>
            </div>
          )}
          <div className="form-group">
            Password<br/>
            <input type="password" className="form-control input" id="password"
            placeholder="Password" value={password} onChange={passwordChange} /><br/>
          </div>
          <Button type="submit" className="btn btn-outline-success" onClick={handleFormSubmit} disabled={!dataDisabled}>{formName}</Button>
        </Container>
      
      )
    }
  }

  return (
    <>
      <form>
        {renderFormInputs()}
      </form>
      {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success mt-3" role="alert">{successMessage}</div>}
    </>
  )  
}

export default BankForm;