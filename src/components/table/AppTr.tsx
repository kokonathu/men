import React from 'react';

import { TableRow, TableRowProps } from "@mui/material";

export const AppTr: React.VFC<TableRowProps> = (props) => {
  const { children } = props;

  return (
    <TableRow>
      {children}
    </TableRow>
  );
}

export default AppTr;
