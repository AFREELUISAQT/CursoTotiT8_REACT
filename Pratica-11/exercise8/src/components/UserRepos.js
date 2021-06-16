import React, { useEffect, useState } from "react";
import axios from "axios";
// import User from "./User";

export default function UserRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUserRepos();
  }, [repos.length]);

  const getUserRepos = () => {
    axios
      .get("https://api.github.com/users/afreeluisaqt/repos")
      .then(function (response) {
        console.log(response);
        setRepos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const listUserRepos = () => {
    if (!repos.length) return <li>Este usuário não possui repositórios.</li>;

    return repos.map((repo, index) => {
      return <li key={index}>{repo.name}</li>;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Os repositórios da " " são:</h2>
      <ul>{listUserRepos()}</ul>
    </div>
  );
}
