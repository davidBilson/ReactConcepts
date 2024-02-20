import axios from 'axios';
import React, { useState, useEffect } from 'react'
import useStore from '../../store/useStore';

const Users = () => {

    const users = useStore(state => state.users)
    const fetchUser = useStore(state => state.fetchUsers)

    useEffect(() => {
        fetchUser();
    }, []);

  return (
    <>
        <ul>
            {
                users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </>
  )
}

export default Users