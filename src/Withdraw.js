//import React           from 'react';
import { useContext }  from 'react';
import BankForm        from './BankForm.js';
import { UserContext } from './App.js';
import { Card, Container} from 'react-bootstrap';
import pic from './badbank.png'

function Withdraw() {
  const ctx = useContext(UserContext);
  const loggedInUser = ctx.loggedInUser;

  return (
    <Container className="container">

       
            <Card className="card">
              <h2 className="card-header">Withdraw</h2>
                <div className="card-body">
                  <BankForm
                    formName="Withdraw"
                    />
                </div>
        
            </Card>
          
        
    </Container>
  )
 
}

export default Withdraw;