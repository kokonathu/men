import React from 'react';

import { Accordion, AccordionProps } from "@mui/material";

export const AppAccordion: React.VFC<AccordionProps> = (props) => {
  const { children} = props;

  return (
    <Accordion {...props}>{children}</Accordion>
  );
}