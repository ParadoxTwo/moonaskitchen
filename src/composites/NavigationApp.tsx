import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Routes, Route } from 'react-router-dom';
import theme from '../theme';
import Theme from '../constants/Theme';
import Logo from '../elements/Logo';

interface Page {
  href: string;
  component: () => JSX.Element;
  name: string;
}

interface Props {
  window?: () => Window;
  pages: Page[];
}
const drawerWidth = 240;

export default function NavigationApp(props: Props): JSX.Element {
  const { window, pages } = props;
  const routes = (
    <Routes>
      {pages.map((page, i) => (
        <Route key={i} path={page.href} element={<page.component />}></Route>
      ))}
    </Routes>
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  const logoSize = 40;
  const currentTheme = theme[Theme.CURRENT_THEME];
  const logo = <Logo />;

  const handleDrawerToggle = (): void => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: currentTheme.color.primary,
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        {logo}
      </Typography>
      <Divider />
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {pages.map((page) => (
          <ListItem
            key={page.name}
            disablePadding
            sx={{ height: '100%', verticalAlign: 'middle' }}
          >
            <ListItemButton
              sx={{
                textAlign: 'center',
                height: '100%',
                verticalAlign: 'middle',
              }}
              href={page.href}
            >
              <ListItemText
                primary={page.name}
                sx={{
                  fontSize: 'x-large',
                  color: currentTheme.color.text,
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: currentTheme.color.primary,
          '& .MuiTypography-h6': {
            color: currentTheme.color.text,
            fontFamily: currentTheme.fontFamily.logo,
          },
          minHeight: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'none' },
              '& .MuiSvgIcon-root': {
                fill: currentTheme.color.text,
              },
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}
          >
            {logo}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ color: currentTheme.color.text, fontSize: 'large' }}
                href={page.href}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: currentTheme.color.primary,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{
          p: 0,
        }}
      >
        {routes}
      </Box>
    </Box>
  );
}
