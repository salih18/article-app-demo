import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import InputPassword from "../components/InputPassword";
import { useAuth } from "./../redux/hooks";

import "./Login.scss";

const LOGIN_INITIAL_DATA = {
  email: "",
  password: "",
};
const Login = () => {
  const { loginUser, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState(LOGIN_INITIAL_DATA);
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth-wrapper auth-v1 px-2">
      <div className="auth-inner py-2">
        <Card className="mb-0">
          <CardBody>
            <Link className="brand-logo" to="/">
              <h2 className="brand-text text-primary ml-1">S-Magazine</h2>
            </Link>
            <CardTitle tag="h4" className="mb-1">
              Welcome to S Magazine
            </CardTitle>
            <CardText className="mb-2">Please sign-in to your account</CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <FormGroup>
                <Label className="form-label" for="login-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  value={email}
                  name="email"
                  onChange={onChange}
                  placeholder="john@example.com"
                  autoFocus
                />
              </FormGroup>
              <FormGroup>
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  <Link to="/pages/forgot-password-v1">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPassword
                  className="input-group-merge"
                  id="login-password"
                  value={password}
                  name="password"
                  onChange={onChange}
                />
              </FormGroup>

              <Button color="primary" block onClick={onSubmit} type="submit">
                Sign in
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
