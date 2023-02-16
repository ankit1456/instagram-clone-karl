import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseContext from "../context/firebase";

const Login = () => {
  const history = useHistory();
  const { Firebase } = useContext(firebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = !password || !email;

  const handleLogin = () => {};
  useEffect(() => {
    document.title = "Login - Instagram";
  },[]);
  return <div>login</div>;
};

export default Login;
