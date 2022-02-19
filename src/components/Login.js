import React, { useState } from 'react'
import './CSS/Login.css'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Spinner from '../components/Spinner'

const Login = (props) => {
    let Navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handleLogin = async (e) => {
        e.preventDefault()
        document.getElementById('loader').style.display = "block"
        const response = await fetch("https://tohid-backend.herokuapp.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const json = await response.json();
        const authtoken = json.authToken;
        if (json.success) {
            // save the auth token  and redirect
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('email', json.email);
            Navigate('/', { replace: true })
            let email = localStorage.getItem('email')
            props.showAlert(`${email} Logged in successfuly`, 'success')


        } else {
            document.getElementById('loader').style.display = "none"
            props.showAlert("Invalid email or password", 'danger')

        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }



    return (
        <>

            <div className='containerSignUpandLogin container-fluid' >


                <form className='my-3 ' onSubmit={handleLogin} >

                    <div className="container flex-column container d-flex justify-content-center align-items-center">
                        <img style={{height : "70px", width: "70px"}} src={logo} alt=""  />
                        <h4>Tohid Saif</h4>

                    </div>

                    <div className=" container d-flex justify-content-center align-items-center flex-column">
                        <h4>Login to continue.. Your information is safe.</h4>
                        <div id='loader' style={{display: 'none', height:"30px", width:"30px"}}>
                        <Spinner/>
                    </div>
                    </div>
                   
                    <div className="form-group ">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control my-2" id="email" onChange={onChange} value={credentials.email} name='email' required minLength={5} aria-describedby="emailHelp" placeholder="Enter email" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" required minLength={5} className="form-control my-2" id="password" value={credentials.password} name='password' onChange={onChange} placeholder="Password" />
                    </div>
                    <div className="container d-flex justify-content-center align-items-center">
                        <button type="submit" id='loginbtn' className="btn btn-primary ">Login</button>
                    </div>
                    <div className="container d-flex flex-column justify-content-center align-items-center ">
                        <p className='my-2'>If you have not account, <Link to="/signup">SIGN UP</Link></p>

                    </div>
                </form>
            </div>
        </>
    )

}

export default Login