import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import Login from "./login";
import { useNavigate } from "react-router";
const LoginForm = () => {
    const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    password: "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = dataLogin;
    const payload = {
        password: password,
        username: username,
    };
    const {data} = await Login(payload);

    if(data.response !== 200){
        alert('sukses');
        localStorage.setItem("token", JSON.stringify(data.data.token));
        navigate('checklist')
      } else {
        alert('gagal')
      }
  };
  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setDataLogin({
                ...dataLogin,
                password: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={(e) => {
              setDataLogin({
                ...dataLogin,
                username: e.target.value,
              });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Form.Text className="text-muted">
           do not have account ? <button className="btn btn-danger" onClick={() => navigate('register') } >register</button>
          </Form.Text>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
