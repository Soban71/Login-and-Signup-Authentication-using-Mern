import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Signup= () => {
  const navigate = useNavigate();

 const [user , setuser] = useState({
Name: "",
Email: "",
Password:"",
confirmPassword:""
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
const {Name , Email , Password , confirmPassword} =user
if(Name && Email && Password && (Password === confirmPassword) ){
  axios.post('http://localhost:9270/Signup' , user)
  .then(res => console.log(res));
 
  alert("Account created");
  navigate('/');
  //toast.success("Account Created Successfully");
}
else {
  toast.error('Invalid');
}

  }

  return (
    <div className="signup-page">
     <ToastContainer />
      <div className='Cntainer'>
      <h1>Registration</h1>
      <div className="form-group">
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            name='Name'
            value={user.Name}
            onChange={handleChange}
            required
          />
          </div>
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
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" onClick={register} className='btn'>Sign Up</button>
        </div>

    </div>
  );
};

export default Signup;
