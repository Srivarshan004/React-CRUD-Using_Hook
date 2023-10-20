import React, { useEffect, useState } from 'react'

function EditUserForm(props) {
  
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setUser({...user, [name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!user.name || !user.username) return
        props.updateUser(user.id, user)
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' onChange={handleInputChange} name='name' value={user.name} />
        <label>Username</label>
        <input type='text' onChange={handleInputChange} name='username' value={user.username} />
        <button>Update User</button>
        <button className='button muted-button' onClick={() => {
            props.setEditing(false)
        }}>Cancel</button>
    </form>
    )
}

export default EditUserForm