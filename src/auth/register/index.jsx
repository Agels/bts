import {Form, Button, Container} from 'react-bootstrap';
import { useState } from 'react';
import Register from './register'

const RegisterForm = () => {
    const [dataRegis, setDataRegis] = useState({
        email: "",
        password: "",
        username: "",
      });

const handleSubmit = async(e) => {
  e.preventDefault()
    const { email, password, username } = dataRegis;
    const payload = {
        email: email,
        password: password,
        username: username,
      };
   
const {data} = await Register(payload);

if(data.response !== 200){
  alert('sukses');
} else {
  alert('gagal')
}
      
}
    return (
        <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => {
                setDataRegis({
                  ...dataRegis,
                  email: e.target.value,
                });
              }} />
        <Form.Text className="text-muted" >
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e) => {
                setDataRegis({
                  ...dataRegis,
                  password: e.target.value,
                });
              }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter email"  onChange={(e) => {
                setDataRegis({
                  ...dataRegis,
                  username: e.target.value,
                });
              }} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    )
}

export default RegisterForm;