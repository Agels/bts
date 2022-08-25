import axios from "axios";

const Register = async(payload) => {
    return await axios.post('http://94.74.86.174:8080/api/register', payload)
}

export default Register;
