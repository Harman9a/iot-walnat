import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ManageAdmin() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const state = useSelector((state) => state.auth);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/getUsers`, {
        headers: {
          Authorization: state.jwt,
        },
      })
      .then((res) => {
        setError("");
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <div>
        {error}
        {users.map((x, i) => {
          return (
            <div key={i}>
              <div>{i + 1}</div>
              <div>{x.email}</div>
              <div>{x.password}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
