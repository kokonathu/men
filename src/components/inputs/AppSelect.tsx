import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { SxProps } from '@mui/material';

export interface AppSelectOption {
  value: string | number;
  label: string;
}

interface AppSelectProps {
  name: string,
  label?: string,
  required?: boolean,
  items: AppSelectOption[],
  sx?: SxProps,
  fullWidth?: boolean,
}

export const AppSelect = React.memo((props: AppSelectProps) => {
  // react-hook-fomrを使用する前提のcomponent
  const { control } = useFormContext();
  const { name, label, required, items, sx, fullWidth } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          size='small'
          {...field}
          label={label}
          required={required}
          sx={sx}
          select
          fullWidth={fullWidth}
        >
          {items.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
});
