import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';
import { Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@mui/material';

//  カラー設定
const sx = {
      color: '#fff',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&.Mui-selected': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#fff',
      },
      '.MuiBottomNavigationAction-label.Mui-selected': {
        fontSize: '0.75rem'
      }
    }

export const GlobalNavi: React.VFC = React.memo(() => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };


  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
    >
        <BottomNavigationAction
          component={Link}
          key="/Topics"
          to="/Topics"
          label="TOP"
          sx={sx}
        />
        <BottomNavigationAction
          component={Link}
          key="/Application/Search"
          to="/Application/Search"
          label="申請"
          sx={sx}
        />
        <BottomNavigationAction
          component={Link}
          key="/SearchCompany"
          to="/SearchCompany"
          label="企業情報"
          sx={sx}
        />
        <BottomNavigationAction
          component={Link}
          key="/letter-management"
          to="/letter-management"
          label="与信管理"
          sx={sx}
        />
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          sx={sx}
        >
          管理
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem 
                      component={Link}
                      to="/MgmtUsers"
                      key="/MgmtUsers"
                      onClick={handleClose}
                      >ユーザー管理</MenuItem>
                    <MenuItem 
                      component={Link}
                      to="/Sample1"
                      key="/Sample1"
                      onClick={handleClose}
                      >サンプル１</MenuItem>
                    <MenuItem 
                      component={Link}
                      to="/Sample3"
                      key="/Sample3"
                      onClick={handleClose}
                      >サンプル３</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </BottomNavigation> 
  );
});

