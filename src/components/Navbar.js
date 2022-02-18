import { React } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
        
    let location = useLocation();   
    let Navigate = useNavigate()
    let email = localStorage.getItem('email')
    const handleLogout = () =>{
        localStorage.removeItem('token')
        Navigate('/login')
        props.showAlert(`${email} Logout successfully`, 'success')
        
     
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link  id='home' className={`nav-link ${location.pathname === "/" ? "active" : ""} `} aria-current="page" to="/"  >Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""} `} to="/about">About</Link>
                        </li> */}

                    </ul>
                    {!localStorage.getItem('token')?<form  >
                    <Link className='btn btn-primary mx-1' to='/signup' role='btn' >Sign Up</Link>
                    <Link className='btn btn-primary mx-1' to='/login ' role='btn' >Login</Link>
                    </form>: <button className='btn btn-primary mx-1 ' name='logout' onClick={handleLogout} role='btn' >Logout</button>}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
