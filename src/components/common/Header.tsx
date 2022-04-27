import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import {GlobalNavi} from './GlobalNavi';
import { Link, useLocation } from 'react-router-dom';
import { Button, Tooltip } from '@mui/material';
import { title } from '../../const/common';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header: React.VFC = React.memo(() => {
  const GNavi = React.memo(GlobalNavi);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const isLogin = useContext(isLoggedIn);
  // あとで消す
  const isLogin = true;


  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
    // setAuth(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // ログアウト処理
  const logout = () => {
    // 初期値をセットすることでauthInfoのバリデーションがはしる
    // setAuthInfo(defaultAuthValue);
    // ローカルストレージの値をカラにする
    // localStorage.removeItem("jwt");
    setAnchorEl(null);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    // setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // ロケーションに応じてタイトルを取得
  const location = useLocation().pathname;
  const titles = title.filter(t => {
      return t.location == location;
  });
 titles.push({location:"",title:""});

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link to="/" style={{ color: '#FFF', textDecoration: 'none', display: 'block' }}>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            CMAロゴ
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
            component={Link}
            key="topics"
            to="/Sample1"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            topics
              </Button>
              <Button
                component={Link}
                key="application"
                to="/Application/Search"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                申請
              </Button>
              <Button
                component={Link}
                key="company"
                to="/SearchCompany"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                企業情報
              </Button>
              <Button
                component={Link}
                key="coredit"
                to="/SearchCompany"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                与信管理
              </Button>

              <Button
                key="mgmt"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, color: 'white', display: 'block' }}

              >
              管理
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                component={Link}
                to="/MgmtUsers"
                onClick={handleClose}>ユーザー管理</MenuItem>
              <MenuItem
                component={Link}
                to="/Sample4"
                onClick={handleClose}>フォームサンプル</MenuItem>
              <MenuItem onClick={handleClose}>組織管理</MenuItem>
              <MenuItem onClick={handleClose}>〇〇管理</MenuItem>
            </Menu>
                      </Box>
          <Typography
            variant="h6"
            noWrap
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } ,color: 'gainsboro',fontWeight: 'bold',}}
          >
          {titles[0].title}
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="ユーザーメニュー">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
  );
});
