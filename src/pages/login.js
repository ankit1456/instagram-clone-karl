import * as ROUTES from "../constants/routes";

import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import firebaseContext from "../context/firebase";

const Login = () => {
  const history = useHistory();
  const { Firebase } = useContext(firebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = !password || !email;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await Firebase.auth().signInWithEmailAndPassword(email, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
    }
  };
  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex items-center mx-auto max-w-screen-md h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram app"
        />
        
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin}>
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="email"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-medium
        ${isInvalid && "opacity-50"}`}
            >
              Log in
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center  w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link
              to={ROUTES.SIGN_UP}
              className="font-semibold text-blue-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
