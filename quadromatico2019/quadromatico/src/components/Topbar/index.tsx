import React, { Props, useState } from 'react';
import useStyles from './styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import LogoUnifil from 'assets/images/UNIFIL_GRADUACAO.png';
import Sidebar from 'components/Sidebar';
import MuiIcon from 'components/MuiIcon';

function Topbar(props: Props<any>) {
  const classes = useStyles();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  function toggleSidebar() {
    setSidebarCollapsed(!sidebarCollapsed);
  }

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={toggleSidebar}
            >
              <MuiIcon icon="MdMenu" />
            </IconButton>
            <div className={classes.logoContainer}>
              <img src={LogoUnifil} className={classes.logoUnifil} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Sidebar open={sidebarCollapsed} onClose={toggleSidebar} />
    </>
  );
}

export default Topbar;
