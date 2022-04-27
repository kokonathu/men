import React from 'react';

import { TableCell, TableCellProps } from "@mui/material";

export const AppTd: React.VFC<TableCellProps> = (props) => {
  const { children } = props;

  return (
    <TableCell variant="body" {...props}>
      {children}
    </TableCell>
  );
}

export default AppTd;
