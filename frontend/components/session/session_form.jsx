import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => {
      this.setState({ [property]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    const { loggedIn, formType, errors } = this.props;

    if (loggedIn) {
      return (
        <Redirect to="/" />
      );
    } else {
      return (
        <div>
          { formType === "/login" ? 
            <Link to="/signup">Sign Up</Link> :
            <Link to="/login">Log In</Link>
          }
          <form>
            <p>
              {errors.join(", ")}
            </p>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />

            <input 
              onClick={this.handleSubmit} 
              type="submit" 
              value={formType.slice(1)} 
            />
          </form>
        </div>
      );
    }
    
  }
}

export default SessionForm;