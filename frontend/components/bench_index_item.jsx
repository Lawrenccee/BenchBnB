import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <li>
    {bench.description}
    <br/>
    {bench.lat}, {bench.lng}
  </li>
);

export default BenchIndexItem;