import {styled} from '@mui/material';
import React from 'react';


export const NBrdStyle = React.memo(styled('div')`
table {
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  vertical-align: middle;
}

td,
th {
  border: 0px;
  // text-align: center;
  margin: auto;
  padding: 8px;
  vertical-align: middle;
  font-weight: bold;
}

tr {
  margin: auto;
}
`);
