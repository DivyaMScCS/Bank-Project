import React    from "react";
import BankForm from './BankForm';
import { Card, Container } from "react-bootstrap";


function CreateAccount() {

  return (
    <Container className="container">
     
              <Card className="card">
                <h2 className="card-header">Create Account</h2>
                  <div className="card-body">
                    <BankForm
                      formName="Create Account"
                    />
                  </div>
               
              </Card>
        
    </Container>
  )
}

export default CreateAccount;