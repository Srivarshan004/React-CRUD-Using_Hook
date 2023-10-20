import { useState } from 'react';
import './index.css'
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

function App() {

  const usersData = [
    { id: 1, name: 'sri', username: 'sri001' },
    { id: 2, name: 'varshan', username: 'varshan001' },
    { id: 3, name: 'vijay', username: 'vijay001' },
    { id: 4, name: 'rohit', username: 'rohit001' }
  ]

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
    setEditing(false)
  }

  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)

  const initialState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialState)

  const editUser = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => user.id === id ? updatedUser : user))
  }

  return (
    <div className="container">
      <h1>CRUD With React Hook</h1>
      <hr/>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? <div>
            <h2>Update User</h2>
            <EditUserForm
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div> : <div>
            <h2>Add User</h2>
            <AddUserForm addUser={addUser} />
          </div>}
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable editUser={editUser} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
