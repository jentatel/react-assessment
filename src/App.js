import React, { useState } from 'react';

import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (fName,lName,email1,eid1,bdate) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { firstname:fName, lastname:lName, email:email1, eid:eid1 , birthdate:bdate, id: Math.random().toString()}];
    } );
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />

    </div>
  );
}

export default App;
