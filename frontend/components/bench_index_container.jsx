import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import values from 'lodash/values';
import BenchIndex from './bench_index';

const mapStateToProps = (state, ownProps) => (
  {
    benches: values(state.entities.benches),
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    fetchBenches: () => dispatch(fetchBenches()),
  }
);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BenchIndex)
);