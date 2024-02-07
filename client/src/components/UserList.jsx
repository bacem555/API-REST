 // UserList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, handleAdd } from '../red/actions';
import UserCard from './UserCard';
import Spinner from 'react-bootstrap/Spinner';

const UserList = () => {
  const { users, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);


  return (
    <div>
      
    
        {loading ? 
          
            <h1>Loading...</h1>
             : (
          users.map((el) => (
            <UserCard user={el}/>
          ))
        )}
      

      
    </div>
  );
};

export default UserList;
