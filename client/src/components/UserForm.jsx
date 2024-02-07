 // UserForm.js
import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { handleAdd } from '../red/actions';

const UserForm = ({ onAddUser }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
   const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
  const newUser={
    fullName,
    email,
    phone
  }
  dispatch(handleAdd(newUser))
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        
          Full Name:
          <input
            type="text"
            
            value={fullName}
            onChange={(e) => setFullName( e.target.value )}
          />
        
        <br />
        
          Email:
          <input
            type="text"
            
            value={email}
            onChange={(e) => setEmail( e.target.value )}
          />
          
        
        <br />
        
          Phone:
          <input
            type="text"
            
            value={phone}
            onChange={(e) => setPhone( e.target.value )}
          />
          
        
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
