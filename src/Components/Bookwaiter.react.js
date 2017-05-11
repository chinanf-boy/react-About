import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Bookwaiter = ({ thickness = 2 }) => (
  <div>
    <CircularProgress size={100} thickness={+thickness} />
  </div>
);

export default Bookwaiter;