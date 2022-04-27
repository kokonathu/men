import { Box, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataGrid, jaJP,GridToolbarContainer ,GridToolbarColumnsButton,GridToolbarExport,DataGridProps, GridSelectionModel, GridCallbackDetails} from '@mui/x-data-grid';
import React from 'react';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  // '& .MuiDataGrid-columnHeader': {
  //   backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  // },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
}));

//DataGridPropsを拡張したインターフェースを作成
interface AppDataGridProps extends DataGridProps {
  filename:string
  checkbox?:boolean
  }

// 拡張したインターフェースをpropsとして引き渡す
export const AppDataGrid: React.VFC<AppDataGridProps> = React.memo((props) => {
  
    //checkboxが渡されてこなかったらfalseを設定（trueが渡されてきたらチェックボックスが表示される）
    const { checkbox = false,filename, ...DataGridProps } = props

    // ツールバーに表示するメニューを設定
    function CustomToolbar() {
      return (
        <GridToolbarContainer>
          <GridToolbarColumnsButton />
          {/*エクスポート時に非表示のカラムもエクスポート */}
          <GridToolbarExport csvOptions={{ allColumns: true ,delimiter:'\t',fileName:filename}}  />
        </GridToolbarContainer>
      );
    }

    return (
    <Box sx={{height: 600,width: '100%',}}>
      <StyledDataGrid 
        rows={DataGridProps.rows}
        columns={DataGridProps.columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        
        onRowClick={(params, event,details) => {DataGridProps.onRowClick? DataGridProps.onRowClick(params, event,details):undefined }}
        components={{
          Toolbar: CustomToolbar,
        }}
        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
        checkboxSelection={checkbox}
        disableSelectionOnClick={checkbox}
        onSelectionModelChange={(selectionModel: GridSelectionModel, details: GridCallbackDetails) => {DataGridProps.onSelectionModelChange? DataGridProps.onSelectionModelChange(selectionModel, details) : undefined }}
      />
    </Box>
  );
});

