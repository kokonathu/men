import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { SxProps } from '@mui/material';

export interface AppAutocompleteOption {
  id: string;
  label: string;
}

interface AppAutocompleteProps {
  name: string,
  options: AppAutocompleteOption[],
  label?: string,
  sx?: SxProps,
  disabled?: boolean,
  error?:boolean,
  helperText?:string,
  onChange?: (value: any) => void
}

export const AppAutocomplete:React.VFC<AppAutocompleteProps> = React.memo((props) => {
  // react-hook-fomrを使用する前提のcomponent
  const { control } = useFormContext();
  const { name, options, label, sx, disabled ,error,helperText, onChange} = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          sx={sx}
          options={options}
          autoHighlight
          disabled={disabled}
          getOptionLabel={(option) => option.label}
          onChange={(_, value) => {
            field.onChange(value);

            if (onChange) {
              onChange(value);
            }
          }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={params => (
            <TextField
              {...params}
              label={label}
              margin='none'
              size='small'
              autoComplete="off"
              helperText={helperText}
              error={error}
              inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password',
                }}
            />
          )}
        />
      )}
    />
  );
});

type TAppAutocompleteBase = {
  name: string,
  options: AppAutocompleteOption[],
  label?: string,
  sx?: SxProps,
  disabled?: boolean,
  error?:boolean,
  helperText?:string,
  onChange?: (value: any, setState?: any) => void
  setState: any
}

export const AppAutocompleteBase:React.VFC<TAppAutocompleteBase> = (props: TAppAutocompleteBase) => {
  const { name, options, label, sx, disabled, onChange, setState} = props;

  return (
    <Autocomplete
      sx={sx}
      options={options}
      autoHighlight
      disabled={disabled}
      getOptionLabel={(option) => option.label}
      onChange={(_, value) => {
        if (onChange) {
          onChange(value, setState);
        }
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          margin='none'
          size='small'
          autoComplete="off"
          inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
        />
      )}
    />
  );
};