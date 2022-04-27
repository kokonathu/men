import React from 'react';

import { Paper, TableContainer, TableContainerProps } from "@mui/material";

export const AppTableContainer: React.VFC<TableContainerProps> = (props) => {
  const { children } = props;

  return (
    <Paper>
      <TableContainer {...props}>
        {children}
      </TableContainer>
    </Paper>
  );
}

export default AppTableContainer;