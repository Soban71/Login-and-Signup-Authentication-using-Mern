import React, { useState } from 'react';
import './Login.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



const Login= () => {

  //let history = useHistory();
 const [user , setuser] = useState({

Email: "",
Password:"",

 })

  const handleChange = (e) => {
    e.preventDefault();
    const {name , value}=e.target
    setuser({
      ...user,
      [name]:value
    })
   
  };

  const register=()=>{
const { Email , Password } =user

  axios.post('http://localhost:9270/Login' , user)
  .then(res => toast.info(res.data.message));
 // toast.success("Account Created Successfully");
  }

  return (
    <div className="signup-page">
     <ToastContainer />
      <div className='Cntainer'>
      <h1>Login Here</h1>
     
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name ="Email"
            value={user.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={user.Password}
            onChange={handleChange}
            required
          />
        </div>
       
        <button type="submit" onClick={register} className='btn'>Login</button>
        <p>Already Have an account?<b> <Link to="/Components/Signup" style={{textDecoration: "none"}}>Signup</Link></b></p>
        </div>

    </div>
  );
};

export default Login;