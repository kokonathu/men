
import Table from '@mui/material/Table';

type Props= {
    stickyHeader?: boolean;
    ariaLabel?: any;
    children?: any;
  }

const AppTable:React.VFC<Props> = (props) => {
  // https://mui.com/components/tables/#main-content の必要なpropsを追加する
  const { stickyHeader, ariaLabel, children } = props;

  return (
    <Table stickyHeader={stickyHeader} aria-label={ariaLabel}>
      {children}
    </Table>
  );
}

export default AppTable;