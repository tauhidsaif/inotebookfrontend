import React, { useState } from 'react'
import './CSS/Login.css'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Spinner from '../components/Spinner'



const SignUp = (props) => {
  let Navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  const handleSignUp = async (e) => {
    const { name, email, password } = credentials;
    document.getElementById('loader').style.display = "block"
    e.preventDefault()
    const response = await fetch("https://tohid-backend.herokuapp.com/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json();
    console.log(json)
    if (json.success) {
      // save the auth token  and redirect
      // localStorage.setItem('token', json.authToken);
      localStorage.setItem('email', json.email);
      localStorage.setItem('name', json.name);
      console.log(localStorage.getItem('name'))
      console.log(json.name)
      Navigate('/login', { replace: true })
      props.showAlert("Your Account created successfully ", 'success')
    } else {
      document.getElementById('loader').style.display = "none"
      props.showAlert(`${email} already exists.`, 'danger')
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }



  return (
    <>


      <div className='container-lg containerSignUpandLogin' >
        <form className='my-3 ' onSubmit={handleSignUp} >
          <div className="container flex-column container d-flex justify-content-center align-items-center">
            <img style={{ height: "70px", width: "70px" }} src={logo} alt="" />
            <h4>Tohid Saif</h4>

          </div>

          <div className=" container d-flex justify-content-center align-items-center">
            <h4>Create account to Save your Notes on Cloud</h4>
          </div>
          <div id='loader' style={{ display: 'none', height: "30px", width: "30px" }} className="container ">
            <Spinner />
          </div>

          <div className="form-group ">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" className="form-control my-2" id="name" onChange={onChange} value={credentials.name} name='name' aria-describedby="emailHelp" minLength={5} required placeholder="Enter Name" />
          </div>

          <div className="form-group ">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control my-2" id="email" onChange={onChange} value={credentials.email} name='email' aria-describedby="emailHelp" required placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control my-2" id="password" minLength={5} required value={credentials.password} name='password' onChange={onChange} placeholder="Password" />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control my-2" id="cpassword" minLength={5} required value={credentials.cpassword} name='cpassword' onChange={onChange} placeholder="Confrim Password" />
          </div>
          <div className="container d-flex justify-content-center align-items-center">
            <button type="submit" id='loginbtn' className="btn btn-primary ">Sign Up</button>
          </div>
          <div className="container d-flex justify-content-center align-items-center ">
            <p className='my-2'>If you have account, <Link to="/login">LOGIN</Link></p>

          </div>
        </form>
      </div>
    </>
  )
}
export default SignUp