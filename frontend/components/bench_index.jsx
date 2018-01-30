import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const { benches } = this.props;
    const BenchIndexItems = benches.map(
      (bench) => <BenchIndexItem key={bench.id} bench={bench} />);
    return (
      <div>
        <ul>
          {BenchIndexItems}
        </ul>
      </div>
    );
  }
}

export default BenchIndex;