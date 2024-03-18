// SignUp.js
import React, { useState } from "react";
import "./styles.css"; // Import SignUp.css for styling

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    country: "",
    gender: ""
  });
  const [isShaking, setIsShaking] = useState(false); // State to manage shaking effect

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if registration was successful
      if (response.status === 200) {
        // Update UI to indicate successful registration
        console.log("User registered successfully!");
        // Reset form fields
        setFormData({
          username: "",
          email: "",
          password: "",
          age: "",
          country: "",
          gender: ""
        });
      } else if (response.status === 400) {
        // Trigger shaking effect if user already exists
        setIsShaking(true);
        // Reset shaking effect after a short delay
        setTimeout(() => setIsShaking(false), 500);
      } else {
        // Handle other registration errors
        console.error("An error occurred while registering the user.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={`form-container sign-up-container ${isShaking ? 'shake' : ''}`}>
      <form onSubmit={handleSignUp}>
        <h1>Create Account</h1>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
        />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Gender"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
