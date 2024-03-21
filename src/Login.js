import React           from 'react';
import BankForm        from './BankForm';
import { Card, Container } from 'react-bootstrap';
import pic from './badbank.png';

function Login() {
  

  return (
    <Container className='container'>
 
        
        <div className='col'>
    <Card>
      <h2 className="card-header">Login</h2>
      <div className="card-body">
        
        <BankForm 
          hideEmail={true}
          formName="Login"
        />
      </div>
  

    </Card>
    </div>
    
    </Container>
  )
}

export default Login;