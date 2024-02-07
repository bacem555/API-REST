 
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getUsers, handleDelete } from '../red/actions';
import EditUser from './EditUser';


const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  // Check if user object exists and contains necessary properties

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{user.fullName}</Card.Title>
          <Card.Text>{user.phone}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(handleDelete(user._id));
              dispatch(getUsers()); 
            }}
          >
            Delete
          </Button>
          <EditUser user={user}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
