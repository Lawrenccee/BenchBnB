import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser !== null,
  errors: state.errors.session,
  formType: ownProps.location.pathname,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.location.pathname === '/login' ? login : signup;

  return {
    processForm: (user) => dispatch(action(user)),
  };
};

export default withRouter(
  connect(
    mapStateToProps, 
    mapDispatchToProps)
    (SessionForm)
  );