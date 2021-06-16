import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function User() {
    const [user, setUser] = useState({})

    useEffect(() => {
        getUserByUsername()
    }, [])

    const getUserByUsername = () => {
        axios.get('https://api.github.com/users/afreeluisaqt')
            .then(function (response) {
                console.log(response.data);
                setUser(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Nome de Usuario: {user.login}</h1>
            <img style={{borderRadius:"50%"}} src={user.avatar_url} width="300" alt="Foto de Perfil" />
        </div>
    )
}