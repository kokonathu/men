import React from 'react';

import { AccordionSummary, AccordionSummaryProps } from "@mui/material";

export const AppAccordionSummary: React.VFC<AccordionSummaryProps> = (props) => {
  const { children } = props;

  return (
    <AccordionSummary {...props}>
      {children}
    </AccordionSummary>
  );
}