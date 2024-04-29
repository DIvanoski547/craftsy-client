import Navbar from "../components/Navbar";
import React, { useState } from "react";
import { Input, Tooltip, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";
import {
  InfoCircleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  // const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <>
      <Navbar />
      <Card
        style={{
          width: 300,
        }}
      >
        <h1>Login Page</h1>

        <form>
          {/* EMAIL INPUT */}
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email"
            suffix={
              <Tooltip title="Email needs to be unique">
                <InfoCircleOutlined
                  style={{
                    color: "rgba(0,0,0,.45)",
                  }}
                />
              </Tooltip>
            }
          />

          {/* PASSWORD INPUT */}
          <Input.Password
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />

          <Button>Login</Button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </Card>
    </>
  );
}

export default LoginPage;
