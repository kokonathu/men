import { Stack, Alert } from "@mui/material";

type Props ={
    result?: boolean;
    successMessage?: string;
    warningMessage?: string;
}

export const ImportResult: React.VFC<Props> = (props) => {
    const {result=true,successMessage="",warningMessage=""} = props;
    const msgS = successMessage.split(/(\n)/g).map(t => (t === '\n')?<br/>:t);
    const msgW = warningMessage.split(/(\n)/g).map(t => (t === '\n')?<br/>:t);

    return (
        <>
            <input type="hidden" name="result"/>
            <input type="hidden" name="message"/>
            {result && successMessage != "" && (
                <Stack sx={{  mx: 'auto',width: '100%', }} spacing={2}>
                    <Alert severity="success">
                    {msgS}
                    </Alert>
                </Stack>)}
            {result && warningMessage != "" && (
                <Stack sx={{  mx: 'auto',width: '100%', }} spacing={2}>
                    <Alert severity="warning">
                    {msgW}
                    </Alert>
                </Stack>)}
        </>
    )

}