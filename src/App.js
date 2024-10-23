import './App.css';
import UserTable from './tables/UserTable';
import { useState } from 'react';

function App() {

  const usersData = [
    { id: 1, name: "Elmer", userName: "Elmer1"},
    { id: 2, name: "Bryan", userName: "Brayabn1"},
    { id: 3, name: "Andres", userName: "Andres1"},
    { id: 4, name: "Gustavo", userName: "Gustavo1"}
  ];

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  };

  const initialFormState = { id: null, name: "", userName: ""};

  const [users, setUsers] = useState(usersData);

  const [currentUser, setCurrentUser] = useState(initialFormState); 

  return (
    <div>
      <h1>CRUD DE USUARIOS</h1>
      <UserTable 
        users={users}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
