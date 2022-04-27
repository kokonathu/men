import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControl, FormHelperText, SxProps } from "@mui/material";

export interface AppRadioItem {
  value: string | number;
  label: string;
}

interface AppCheckboxProps {
  name: string,
  items: AppRadioItem[],
  error?:boolean,
  helperText?:string,
  disabled?: boolean,
  onChange?: (value: string | number) => void,
}

export const AppRadios = React.memo((props: AppCheckboxProps) => {
  // react-hook-fomrを使用する前提のcomponent
  const { control } = useFormContext();
  const { name, items, helperText, error, onChange, disabled } = props;

  return (
    <FormControl>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange: rhfOnChange } }) => (
          <RadioGroup
            name={name}
            value={value}
            onChange={(ev) => {
              const { target: { value }} = ev;

              rhfOnChange(value)
  
              if (onChange) {
                onChange(value)
              }
            }}
            row>
            {items.map((item) => (
              <FormControlLabel key={item.value} value={item.value} control={<Radio disabled={disabled}/>} label={item.label} />
            ))}
          </RadioGroup>
        )}
      />

      <FormHelperText error={error}>
        { helperText }
      </FormHelperText>
    </FormControl>
  );
});
