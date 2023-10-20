import React, { useState } from 'react'

function AddUserForm(props) {
    const initialState = {id:null, name:'', username:''}
    const [user, setUser] = useState(initialState)

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setUser({...user, [name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!user.name || !user.username) return
        props.addUser(user)
        setUser(initialState)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' onChange={handleInputChange} name='name' value={user.name} />
        <label>Username</label>
        <input type='text' onChange={handleInputChange} name='username' value={user.username} />
        <button>Add New User</button>
    </form>
  )
}

export default AddUserForm