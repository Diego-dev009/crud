import React from 'react';
import './UserTable.css';



const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => 
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.userName}</td>
                        <td><button className='button-styles' onClick={()=>props.deleteuser(user.id)} >Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default UserTable;
