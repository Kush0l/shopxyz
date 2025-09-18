import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../database/users";
import styles from "./Login.module.css"


const Login = ()=>{
  const navigate = useNavigate();

  let isLogedIn = false;

  useEffect(() => {
    const userEmail = localStorage.getItem("email");

    if (userEmail) {
      isLogedIn = true;

      if (isLogedIn) {
        navigate("/products", { state: user.email });
      }
    }
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (user.email == "") {
      alert("email is empty");
      return;
    }

    if (user.password == "") {
      alert("password is empty");
      return;
    }

    let isFound = false;

    for (let man of users) {
      if (man.email === user.email) {
        if (man.password === user.password) {
          isFound = true;
        }
      }
    }

    if (!isFound) {
      alert("incorrect credentials");
      return;
    }

    localStorage.setItem("email", user.email);

    navigate("/products");
  };

  return (
    <div>
      <h1>Login</h1>
<div>

      <input
        type="text"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
        /> 
      <br />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
        />
<br />
      <button onClick={handleSubmit}>click</button>
    </div>
        </div>
  );
}

export default Login