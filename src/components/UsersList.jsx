import React, { useEffect, useState } from "react";
import { User } from "./User";
import { Link } from "react-router-dom";
import "./UsersList.css";

export const UsersList = (props) => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const querySnapshot = await props.db.collection("users").get();
    const u = querySnapshot.docs.map((d) => d.data());
    setUsers(u);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="page-container">
      {users.map((u) => (
        <User
          name={u.name}
          description={u.description}
          phone={u.phone}
          key={u.phone}
        />
      ))}
      <Link to="add">Novo usuario</Link>
    </div>
  );
};
