import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    country: '',
    gender: '',
  });
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const africanCountries = [
    'Algeria',
    'Angola',
    'Benin',
    'Botswana',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cameroon',
    'Central African Republic',
    // Add more African countries as needed
  ];

  const ageRanges = [
    { label: '13-28', value: '13-28' },
    { label: '19-24', value: '19-24' },
    { label: '25-35', value: '25-35' },
    { label: '45-55', value: '45-55' },
    { label: '56+', value: '56+' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.text();
      console.log(data);

      setLoading(false); // Set loading state to false
      setRegistrationSuccess(true); // Set registration success state to true
    } catch (error) {
      console.error('Error:', error);
      setLoading(false); // Set loading state to false
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {registrationSuccess ? (
        <div>
          <p>User registered successfully!</p>
          <button>Click here to return to login</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Preferred Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <select name="age" value={formData.age} onChange={handleChange} required>
            <option value="">Select Age Range</option>
            {ageRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          <select name="country" value={formData.country} onChange={handleChange}required>
            <option value="">Select Country</option>
            {africanCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select name="gender" value={formData.gender} onChange={handleChange}required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignUpForm;