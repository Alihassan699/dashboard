import React from 'react';
import '../styles/Signup.css' 

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1 className="signup-form-heading">Signup</h1>
        <div className="signup-form-group">
        
            <label htmlFor="lastName" className="signup-form-label">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"  
                    className="signup-form-input"
                    required
                />
            <label htmlFor="lastName" className="signup-form-label">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"  
                    className="signup-form-input"
                    required
                />
            <label htmlFor="email" className="signup-form-label">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                className="signup-form-input"
                required
                />
        </div>
        <div className="signup-form-group">
          <label htmlFor="password" className="signup-form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="signup-form-input"
            required
          />
        </div>
        <button type="submit" className="signup-form-button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
