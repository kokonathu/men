import React from 'react';

import { AccordionDetails, AccordionDetailsProps } from "@mui/material";

export const AppAccordionDetails: React.VFC<AccordionDetailsProps> = (props) => {
  const { children } = props;

  return (
    <AccordionDetails {...props}>
      {children}
    </AccordionDetails>
  );
}