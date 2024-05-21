import React, { useReducer } from 'react';
import './Registration.css';
const initialState = {
  name: '',
  email: '',
  password: '',
  message: ''
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_MESSAGE':
      return { ...state, message: action.message };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
const RegistrationForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.id,
      value: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = state;
    if (!name || !email || !password) {
      dispatch({ type: 'SET_MESSAGE', message: 'All fields are required.' });
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      dispatch({ type: 'SET_MESSAGE', message: 'Please enter a valid email.' });
      return;
    }
    if (password.length < 6) {
      dispatch({ type: 'SET_MESSAGE', message: 'Password must be at least 6 characters long.' });
      return;
    }
    dispatch({ type: 'SET_MESSAGE', message: 'Registration successful!' });
    dispatch({ type: 'RESET' });
  };
  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
        {state.message && <p className="message">{state.message}</p>}
      </form>
    </div>
  );
};
export default RegistrationForm;
