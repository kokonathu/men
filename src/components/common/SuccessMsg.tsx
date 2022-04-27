
import { Stack, Alert } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import React from 'react';

interface SuccessMsgProps{
    watchResult: boolean;
    watchMessage: string;
}

export const SuccessMsg:React.VFC<SuccessMsgProps> = (props) => {
    const { register, control } = useFormContext();
    const { watchResult=false ,watchMessage=""} = props;
    const msg = watchMessage.split(/(\n)/g).map(t => (t === '\n')?<br/>:t);
    return (
    <>
        <input type="hidden" {...register("result")}/>
        <input type="hidden" {...register("message")}/>
        {watchResult && watchMessage != "" && (
        <Stack sx={{  mx: 'auto',width: '100%', }} spacing={2}>
            <Alert severity="success">
            {msg}
            </Alert>
        </Stack>
        )
        }
    </>
    )
}