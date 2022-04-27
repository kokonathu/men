import React from 'react';
import { pink } from '@mui/material/colors';
import { useFormContext, Controller } from "react-hook-form";
import Checkbox, { CheckboxProps }  from '@mui/material/Checkbox';
import { FormControl, FormControlLabel, FormHelperText, SxProps } from "@mui/material";

interface AppCheckboxProps extends CheckboxProps {
  name: string,
  label?: string,
  sx?: SxProps,
  disabled?: boolean,
  error?:boolean,
  helperText?:string
  onChange?: (value: any) => void

}

const errorSx = {
  color: pink[800],
  '&.Mui-checked': {
    color: pink[600],
  },
};

export const AppCheckbox:React.VFC<AppCheckboxProps> = React.memo((props) => {
  // react-hook-fomrを使用する前提のcomponent
  const { control } = useFormContext();
  const { name, label, sx ,disabled, error, onChange,helperText} = props;
  const dispalyLabel = label && label.length > 0 ? label : "";
  const checkboxSx = error ? errorSx : {};

  return (
    <FormControl>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange:rhfOnChange } }) => {
          return (
            <FormControlLabel
              sx={sx}
              control={
                <Checkbox
                  disabled={disabled}
                  checked={value}
                  onChange={(ev) => {
                    rhfOnChange(ev)
        
                    if (onChange) {
                      onChange(ev)
                    }
                  }}
                  sx={checkboxSx}
                />
              }
              label={dispalyLabel}
            />
          )
        }}
      />

      <FormHelperText error>
        { helperText }
      </FormHelperText>
    </FormControl>
  );
});
