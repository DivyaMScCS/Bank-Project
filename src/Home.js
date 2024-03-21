import React, { useState, useContext } from 'react';
import { UserContext } from './App';
import { Card, Container, Button, Form } from 'react-bootstrap';

function Admin() {
  const ctx = useContext(UserContext);

  const loggedInUser = ctx.loggedInUser;
  const isAdmin =
    loggedInUser && ctx.users.find((user) => user.username === loggedInUser)?.isAdmin;

  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [emailError, setEmailError] = useState('');
  const [profilePic, setProfilePic] = useState(null); 

  const user = ctx.users.find((user) => user.username === loggedInUser);

  const handleLogout = (event) => {
    event.preventDefault();
    ctx.loggedInUser = null;
  };

  const handleEdit = () => {
    setEditMode(true);
    setEditedUser(user);
  };

  const handleSave = () => {
    
    if (!validateEmail(editedUser.email)) {
      setEmailError('Invalid email format');
      return;
    }


    const index = ctx.users.findIndex((u) => u.username === editedUser.username);
    ctx.users[index] = editedUser;

 
    if (profilePic) {
   
      editedUser.profilePic = URL.createObjectURL(profilePic);
    }

 
    setEditMode(false);
  };

  const handleDelete = () => {

    ctx.users = ctx.users.filter((u) => u.username !== user.username);

   
    ctx.loggedInUser = null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });


    if (name === 'email') {
      setEmailError('');
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
  };

  const validateEmail = (email) => {
   
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Container className="container">
      {loggedInUser ? (
        <>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: 'white', textAlign: 'center' }}>User Information</Card.Title>
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #fff',
                  position: 'relative'
                }}>
                  {editMode ? (
                    <label htmlFor="profilePicInput">
                      <img src={user.profilePic} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </label>
                  ) : (
                    <img src={user.profilePic} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                  <input
                    id="profilePicInput"
                    type="file"
                    accept="image/*"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
                    onChange={handleProfilePicChange}
                  />
                </div>
              </div>

              {editMode ? (
                <Form>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      value={editedUser.username}
                      onChange={handleChange}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={editedUser.email}
                      onChange={handleChange}
                      isInvalid={emailError !== ''}
                    />
                    <Form.Control.Feedback type="invalid">
                      {emailError}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formBasicBalance">
                    <Form.Label>Balance</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter balance"
                      name="balance"
                      value={editedUser.balance}
                      onChange={handleChange}
                      disabled
                    />
                  </Form.Group>
                </Form>
              ) : (
                <Card.Text style={{ color: 'white' }}>
                  <p><strong>Username:</strong> {user.username}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Balance:</strong> ${user.balance}</p>
                  {isAdmin && <p><strong>Admin:</strong> Yes</p>}
                </Card.Text>
              )}
            </Card.Body>
          </Card>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button
              variant="primary"
              onClick={editMode ? handleSave : handleEdit}
              className="mr-2"
            >
              {editMode ? 'Save' : 'Edit'}
            </Button>
            <Button variant="danger" onClick={handleDelete} className="mr-2">
              Delete Account
            </Button>
            <Button variant="primary" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </>
      ) : (
        <p>No user logged in.</p>
      )}
    </Container>
  );
}

export default Admin;
