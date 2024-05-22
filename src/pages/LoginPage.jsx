import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const validateForm = () => {
    if (!email || !password) {
      setErrorMessage("Both email and password are required");
      return false;
    }
    return true;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const requestBody = { email, password };
    setIsLoading(true);

    authService
      .login(requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
      })
      .then(() => {
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription =
          error.response?.data?.message || "An error occurred during login";
        setErrorMessage(errorDescription);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <button onClick={handleBack}>Back</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default LoginPage;