import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="/forgot-password">Forgot password?</Link>
            </form>
        </div>
    );
};

export default LoginForm;
