import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);

  const validateForm = () => {
    if (!email || !password || !username) {
      setErrorMessage("All fields are required.");
      return false;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const requestBody = { email, password, username };
    setIsLoading(true);

    authService
      .signup(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        const errorDescription =
          error.response?.data?.message || "An error occurred during signup";
        setErrorMessage(errorDescription);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Signup Page</h1>

      <form onSubmit={handleSignupSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsername}
          required
        />

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
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
      <button onClick={handleBack}>Back</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
export default SignupPage;
