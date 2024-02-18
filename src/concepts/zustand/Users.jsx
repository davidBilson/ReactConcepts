import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Users = () => {
    const [users, setUsers] = useState([]);

    const fetchUserData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            // console.log(res);
            if (res.status === 200) {
                setUsers(res.data)
            } else {
                return;
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchUserData();
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