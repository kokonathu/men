import React from 'react';

import { TableHead, TableHeadProps } from "@mui/material";

export const AppThead: React.VFC<TableHeadProps> = (props) => {
  const { children } = props;

  return (
    <TableHead>
      {children}
    </TableHead>
  );
}

export default AppThead;
