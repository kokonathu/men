import React from 'react';

import { Table, TableProps } from "@mui/material";

export const AppTable: React.VFC<TableProps> = (props) => {
  const { children } = props;

  return (
    <Table {...props}>
      {children}
    </Table>
  );
}

export default AppTable;