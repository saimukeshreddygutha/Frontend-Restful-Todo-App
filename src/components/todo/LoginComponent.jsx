import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setshowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  async function handleSubmit() {
    if (await authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setshowErrorMessage(true);
    }
  }
  return (
    <div className="Login">
      {showErrorMessage && (
        <div>Authentication Failed. Please enter correct credentials.</div>
      )}
      <div className="LoginForm">
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <>
          <button type="button" onClick={handleSubmit}>
            login
          </button>
        </>
      </div>
    </div>
  );
}

export default LoginComponent;
