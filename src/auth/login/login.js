import axios from "axios";

const Login = async(payload) => {
    return await axios.post('http://94.74.86.174:8080/api/login', payload)
}

export default Login;
