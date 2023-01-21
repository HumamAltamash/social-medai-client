import React from "react";
import { Link } from "react-router-dom";
import './Signup.scss'

function Signup() {
    return (
        <div className="Signup">
            <div className="signup-box">
                <h2 className="heading">Signup</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="name" className="name" id="name" />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" className="email" id="email" />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" className="password" id="password" />
                    
                    <input type="submit" className="submit" />
                    
                    <p className="subheading">
                        Already have an account? <Link to="/login">Log In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
