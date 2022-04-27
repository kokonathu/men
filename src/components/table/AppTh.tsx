import React from 'react';

import { TableCell, TableCellProps } from "@mui/material";

export const AppTh: React.VFC<TableCellProps> = (props) => {
  const { children } = props;

  return (
    <TableCell variant="head" {...props}>
      {children}
    </TableCell>
  );
}

export default AppTh;
