import React, { useContext } from 'react';
import { UserContext } from './App';
import { Container } from 'react-bootstrap';

function AllData() {
  const ctx = useContext(UserContext);
  const loggedInUser = ctx.loggedInUser;

  const printRows = () => {
    const users = ctx.users;

    if (loggedInUser) {
      if (ctx.users.find(user => user.username === loggedInUser && user.isAdmin)) {
        // Display all data for admin
        const userTable = users.map(user => (
          <tr key={user.username}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin ? "Yes" : "No"}</td>
            <td>{user.balance}</td>
          </tr>
        ));
        return userTable;
      } else {
        const currentUser = users.find(user => user.username === loggedInUser);

        if (currentUser) {
          return (
            <tr key={currentUser.username}>
              <td>{currentUser.username}</td>
              <td>{currentUser.email}</td>
              <td>{currentUser.isAdmin ? "Yes" : "No"}</td>
              <td>{currentUser.balance}</td>
            </tr>
          );
        } else {
          return <tr></tr>; // Return an empty row if the user is not found
        }
      }
    }

    return null; // Return null for other cases
  };

  return (
    <Container className='container'>
      <div className='row'>
        <div className='col'>
          <p className='welcome'>
            <span className='welcome-word'>Welcome!</span> This is your personal banking information.
            <br /> Enjoy futuristic banking practices with us.
            <br /> <span className='highlighted-text-welcome'>Securely manage your finances</span>
           
            <br /> <span className='highlighted-text-welcome'>Customize your account settings</span>
          </p>
        </div>

        {loggedInUser ? (
          <div className="card mb-3">
            {ctx.users.find(user => user.username.isAdmin === loggedInUser && user.isAdmin) ? (
              <h2 className="card-header">Your Data</h2>
            ) : (
              <h2 className="card-header">Customer Data</h2>
            )}
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>{printRows()}</tbody>
              </table>
              {loggedInUser && ctx.users.find(user => user.username === loggedInUser && user.isAdmin) ? (
                <p><b className="capitalize">{loggedInUser}</b> is logged in as an admin.</p>
              ) : (
                <p><b className="capitalize">{loggedInUser}</b> is logged in.</p>
              )}
            </div>
          </div>
        ) : (
          <p>Please log in to view your details.</p>
        )}
      </div>
    </Container>
  );
}

export default AllData;
