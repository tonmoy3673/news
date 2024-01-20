import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target.form;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.event.reset();
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
      <Form onSubmit={handleLogin} className="mx-auto w-75">
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-2">
          Login
        </Button>
        <br />
        <Form.Text className="text-muted">
          Do not have an account? Please <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger">{error && error}</Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
