 // App.js
import React from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const handleAddUser = (newUser) => {
    // Logic to handle adding a new user
    console.log('Adding user:', newUser);
  };

  return (
    <div className="App">
      <h1>User Management System</h1>
      <UserForm onAddUser={handleAddUser} />
      <UserList />
    </div>
  );
}

export default App;
