import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
 import LoginForm from './auth/login';
import RegisterForm from './auth/register';
import Checklist from './checklist';
function App() {
  return (
   <div>
        
    <BrowserRouter>
         <Routes>
            <Route path='/' element={ <LoginForm />} />
            <Route path='register' element={<RegisterForm />} />
            <Route path='checklist' element={<Checklist />} />
        </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
