import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { registeration, login } from "../services/service";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [validated, setValidated] = useState(false);
  const [loginForm, setLoginForm] = useState("");
  const [registerForm, setRegisterForm] = useState("");
  const navigate = useNavigate();
  const handleLoginChange = (e) => {
    setLoginForm((prev)=>({...prev,[e.target.name]:e.target.value}));
  };
  const handleRegisterChange = (e) => {
    setRegisterForm((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      const registerationdata = {registerForm };
      registeration(registerationdata);
    }
    setValidated(true);
  };
  const handleLoginSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      const logindata = { loginForm };
      login(logindata);
      // navigate("/");
    }
    setValidated(true);
  };
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center pink-gradiant">
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="p-5 login-form">
              <h4 className="mb-4">Login Form</h4>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleLoginSubmit}
              >
                <Row>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom06"
                  >
                    <Form.Control
                      type="email"
                      placeholder="email"
                      value={loginForm?.email}
                      onChange={handleLoginChange}
                      required
                      name="email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom07"
                  >
                    <Form.Control
                      type="password"
                      placeholder="password"
                      required
                      value={loginForm?.password}
                      onChange={handleLoginChange}
                      name="password"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid password.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <h6>
                    create an account click here ? <span>clickme</span>
                  </h6>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="By continuing, i agree to the terms of use & privacy and policy"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                </Row>
                <Button type="submit" className="w-100 continue-btn">
                  Continue
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="p-5 login-form">
              <h4 className="mb-4">Rigisteration Form</h4>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom01"
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="email"
                      value={registerForm?.email}
                      required
                      onChange={handleRegisterChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom02"
                  >
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                      value={registerForm?.password}
                      onChange={handleRegisterChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid password.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom03"
                  >
                    <Form.Control
                      type="password"
                      name="confirmpassword"
                      placeholder="confirm password"
                      required
                      value={registerForm?.confirmPassword}
                      onChange={handleRegisterChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid confirm password.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mb-3"
                    controlId="validationCustom04"
                    onChange={handleRegisterChange}
                  >
                    <Form.Control
                      type="text"
                      placeholder="username"
                      name="username"
                      required
                      value={registerForm?.userName}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid username.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <h6>
                    Already have an account? <span>Login here</span>
                  </h6>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="By continuing, i agree to the terms of use & privacy and policy"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                </Row>
                <Button type="submit" className="w-100 continue-btn">
                  Signup
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginSignup;
