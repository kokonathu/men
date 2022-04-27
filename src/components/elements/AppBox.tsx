import { Box,Grid, SxProps} from '@mui/material';
import React from 'react';
import { ReactNode } from 'react';

//?は引数として渡されないかもしれない際に？を設定
type Props ={
    label:string; 
    children: ReactNode;
    sx?:SxProps;
}

export const AppBox:React.VFC<Props> = React.memo(props =>{
    // =が値が渡されなかった際のデフォルト値
    const { label, children ,sx={p:2 ,boxShadow:'0 0 5px rgba(0, 0, 0, .3)'}} = props;


    return (   
        <Grid 
            container
            direction="column"
            rowSpacing={0} 
            columnSpacing={{ xs: 0, sm: 2, md: 3 }} 
        >
            <Grid item sx={{ minWidth: 104, fontWeight: "bold",fontSize: 25 }}>{label}</Grid>
            <Grid item sx={{ flex: 1 }}>
                <Box sx={{...sx}}>
                    {children}
                </Box>
            </Grid>
        </Grid>
  
  
    )

});


