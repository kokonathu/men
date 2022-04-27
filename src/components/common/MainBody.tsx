import { Stack, Alert } from "@mui/material";
import React from "react";
import {  ReactNode } from "react";
import { FormProvider, useFormContext, UseFormReturn } from "react-hook-form"
import { Progress } from "./Progress";

type Props ={
    children: ReactNode;
    methods:UseFormReturn<any,any>
    result?: boolean;
    message?: string;
    progress?:boolean;
}

export const MainBody: React.VFC<Props> = React.memo((props) => {
    const {children,methods,result=true,message="",progress=false} = props;
    return progress?(<Progress />)
    :(<FormProvider {...methods}>
        <input type="hidden" name="result"/>
        <input type="hidden" name="message"/>
        {!result && (
            <Stack sx={{  mx: 'auto',width: '100%', }} spacing={2}>
                <Alert severity="error" sx={{whiteSpace:"pre-wrap"}}>
                {message}
                </Alert>
            </Stack>)}
        {result && message != "" && (
            <Stack sx={{  mx: 'auto',width: '100%', }} spacing={2}>
                <Alert severity="success" sx={{whiteSpace:"pre-wrap"}}>
                {message}
                </Alert>
            </Stack>)}
        {children}
      </FormProvider>)

});