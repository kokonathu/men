import React from 'react';

import { TableBody, TableBodyProps } from "@mui/material";

export const AppTbody: React.VFC<TableBodyProps> = (props) => {
  const { children } = props;

  return (
    <TableBody>
      {children}
    </TableBody>
  );
}

export default AppTbody;
