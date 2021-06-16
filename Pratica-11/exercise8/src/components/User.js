import React, { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserByUsername();
  }, []);

  const getUserByUsername = () => {
    axios
      .get("https://api.github.com/users/afreeluisaqt")
      .then(function (response) {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Olá! Eu sou {user.name}</h1>
      <img
        style={{ borderRadius: "50%" }}
        src={user.avatar_url}
        width="200"
        alt="Foto de Perfil"
      />
      <h3 style={{ fontSize: 10, width: 240, textAlign: "center" }}>
        {user.bio}
      </h3>
    </div>
  );
}
