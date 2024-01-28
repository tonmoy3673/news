import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const [accepted, setAccepted] = useState(false);
  useTitle("Login");
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target.form;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <Container>
      <h5 className="text-center py-2 mb-2 text-secondary">
        Please Login here{" "}
      </h5>
      <Form className="mx-auto w-75">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button
          disabled={!accepted}
          onClick={handleLogin}
          variant="primary"
          type="submit"
          className="mb-2"
        >
          Login
        </Button>
        <br />
        <Form.Text className="text-muted">
          Do not have an account? Please <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <br />
        <Form.Text className="text-danger py-2">{error && error}</Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
