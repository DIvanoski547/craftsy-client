import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Card } from "antd";

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

  const handleLoginSubmit = () => {
    if (!validateForm()) return;

    const requestBody = { email, password };
    setIsLoading(true);

    authService
      .login(requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
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

  return (
    <div>
      <Card>
        <h1>Login Page</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleLoginSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input value={email} onChange={handleEmail} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password value={password} onChange={handlePassword} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="unchecked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {errorMessage && (
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <div style={{ color: "red" }}>{errorMessage}</div>
            </Form.Item>
          )}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginPage;
