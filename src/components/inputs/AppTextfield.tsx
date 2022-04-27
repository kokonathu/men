import React from 'react';
import { SxProps } from '@mui/material';
import { useFormContext, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';

interface AppTextfieldProps {
  name: string,
  fullWidth?: boolean,
  label?: string,
  required?: boolean,
  onChange?:any,
  onBlur?: any,
  InputLabelProps?: object,
  sx?: SxProps,
  disabled?: boolean,
  type?:string,
  error?:boolean,
  helperText?:string,
  multiline?:boolean,
  rows?:number
}

export const AppTextfield:React.VFC<AppTextfieldProps> = React.memo((props) => {
  // react-hook-fomrを使用する前提のcomponent
  const { register, control } = useFormContext();
  // https://mui.com/components/text-fields/#main-content の必要なpropsを追加する
  const { name, fullWidth, label, required, sx, onChange, onBlur, InputLabelProps, disabled,type ,error,helperText,multiline,rows} = props;

  // ここにCSSを追記する
  const TextFieldSx = {};

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange: rhfOnChange, onBlur: rhfOnBlur  } }) => (
        <TextField
          {...register(name)}
          required={required}
          fullWidth={fullWidth}
          label={label}
          sx={{ ...TextFieldSx, ...sx}}
          InputLabelProps={InputLabelProps}
          disabled={disabled}
          margin='none'
          size='small'
          autoComplete="off"
          error={error}
          helperText={helperText}
          type={type}
          multiline={multiline}
          rows={rows}
          onBlur={(ev) => {
            const { target: { value }} = ev;

            rhfOnBlur()

            if (onBlur) {
              onBlur(value)
            }
          }}
          onChange={(ev) => {
            const { target: { value }} = ev;

            rhfOnChange(value)

            if (onChange) {
              onChange(value)
            }
          }}
        />
      )}
    />
  );
});

type TAppNormalTextfield = {
  defaultValue?: string | number | boolean
  sx?: { width: string }
}

export const AppNormalTextfield:React.VFC<TAppNormalTextfield> = (props: TAppNormalTextfield) => {
  const { defaultValue, sx } = props;
  return (
    <TextField
      disabled={true}
      sx={sx}
      margin='none'
      size='small'
      autoComplete="off"
      defaultValue={defaultValue ? defaultValue : ''}
    />
  );
};
