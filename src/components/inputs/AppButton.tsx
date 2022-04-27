
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface AppButtonProps{
  variant?: any;
  size?: any;
  onClick?: any;
  children?: any;
  sx?: any;
  fullWidth?: any;
  disabled?: any;
  color?:"primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
  id?:string;
}

export const AppButton:React.VFC<AppButtonProps> = React.memo((props) => {
  // https://mui.com/components/buttons/#basic-button の必要なpropsを追加する
  const { register} = useFormContext();
  const { variant ='contained', size='large', onClick, children, sx, fullWidth=false ,disabled=false,color,id} = props;

  const buttonSx = {
  }

  return (
    <Button
      id={id}
      {...register}
      variant={variant} 
      size={size} 
      color={color}
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{...buttonSx, ...sx}}>
      {children}
      
    </Button>
  );
});

type TAppButtonBase = {
  variant?: any;
  size?: any;
  onClick?: any;
  children?: any;
  sx?: any;
  fullWidth?: any;
  disabled?: any;
}

export const AppButtonBase:React.VFC<TAppButtonBase> = (props: TAppButtonBase) => {
  // https://mui.com/components/buttons/#basic-button の必要なpropsを追加する
  const { variant ='contained', size='large', onClick, children, sx, fullWidth=false ,disabled=false} = props;

  const buttonSx = {
  }

  return (
    <Button
      variant={variant} 
      size={size} 
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{...buttonSx, ...sx}}>
      {children}
      
    </Button>
  );
}


interface LoadingButtonProps{
  variant?: any;
  size?: any;
  onClick?: any;
  children?: any;
  sx?: any;
  fullWidth?: any;
  disabled?: any;
  color?:"primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
  id?:string;
  loading?:boolean;
}

export const AppLoadingButton:React.VFC<LoadingButtonProps> = React.memo((props) => {
  // https://mui.com/components/buttons/#basic-button の必要なpropsを追加する
  const { register} = useFormContext();
  const { variant ='contained', size='large', onClick, children, sx, fullWidth=false ,disabled=false,color,id,loading} = props;
  const buttonSx = {
  }

  return (
    <LoadingButton
      id={id}
      {...register}
      variant={variant} 
      size={size} 
      color={color}
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
      loading={loading}
      loadingPosition="start"
      sx={{...buttonSx, ...sx}}>
      {children}
      
    </LoadingButton>
  );
});

