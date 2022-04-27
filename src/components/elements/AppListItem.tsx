import Grid from '@mui/material/Grid';
import React from 'react';
import { ReactNode } from 'react';

type Props ={
  label: string; 
  children:ReactNode;
  justifyContent?:string;
  alignItems?:string;
}

export const AppListItem:React.VFC<Props> = React.memo(props => {
  const { label, children,justifyContent="flex-start", alignItems="flex-start"} = props;

  return (
    <Grid 
      container
      direction="column"
      justifyContent={justifyContent}
      alignItems={alignItems}
      rowSpacing={0} 
      columnSpacing={{ xs: 0, sm: 2, md: 3 }} 
    >
      <Grid item sx={{ minWidth: 104, fontWeight: "bold" }}>{label}</Grid>
      <Grid item sx={{ flex: 1 }}>{children}</Grid>
    </Grid>
  );
});

