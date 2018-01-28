import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ session, logout }) => (
  <div>
    { session.currentUser ? 
      <div>
        <p>Welcome {session.currentUser.username}</p>
        <button onClick={() => logout()}>Logout</button> 
      </div>
      :
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    }
  </div>
);

export default Greeting;