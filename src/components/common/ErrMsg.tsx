import React from 'react';
import { Stack, Alert } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface ErrMsgProps{
    result?: boolean;
    message?: string;
}

export const ErrMsg:React.VFC<ErrMsgProps> = (props) => {
    const { register } = useFormContext();
    const { result=true ,message=""} = props;
    const msg = message.split(/(\n)/g).map(t => (t === '\n')?<br/>:t);
    return (
    <>
        <input type="hidden" {...register("result")}/>
        <input type="hidden" {...register("message")}/>
        {!result && (
        <Stack sx={{  mx: 'auto',width: '100%', }} spacing={2}>
            <Alert severity="error">
            {msg}
            </Alert>
        </Stack>
        ) 
        } 
    </>
    )
}