import './App.css';
import UserTable from './tables/UserTable';
import { useState } from 'react';

function App() {

  const usersData = [
    { id: 1 , name:"Denis", userName: "delta"  },
    { id: 2 , name:"essenia", userName: "kaguya"},
    { id: 3 , name:"Bryan", userName: "Bryan1"},
    { id: 4 , name:"Elmer", userName: "Elmer1"},
    { id: 5 , name:"Ricardo", userName: "Ricardo1"},
    { id: 6 , name:"Lineth", userName: "Lineth"}

  ];

  const deleteuser = id =>{
    setUsers (users.filter(users => users.id !== id))
  }

  const initialFormState = { id: null , name:"", userName: ""};

  const [users, setUsers] = useState( usersData );

  const [currentUser, setCurrentUser] = useState(initialFormState); 
  return (
    <div>
      <h1>CRUD DE USUARIOS</h1>
      <UserTable 
       users = {users}
      />

    </div>
  );
}

export default App;
