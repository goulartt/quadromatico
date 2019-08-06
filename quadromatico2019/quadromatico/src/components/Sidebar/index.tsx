import React, { useState, Props, ClassAttributes } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import MuiIcon from 'components/MuiIcon';
import { ROUTES } from 'routes/routeConfig';
import RouteConfig from 'interfaces/common/route-config';
//import { MdExpandLess } from 'react-icons/md';

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  const classes = useStyles();

  const menus = (
    <div className={classes.list}>
      <NestedList menus={ROUTES} classes={classes} />
    </div>
  );

  return (
    <Drawer open={open} onClose={onClose}>
      {menus}
    </Drawer>
  );
}

type NestedListProps = {
  nested?: boolean;
  menus: RouteConfig[];
  classes: any;
};

function NestedList(props: NestedListProps & ClassAttributes<any>) {
  const [collapse, setCollapse] = useState(false);
  const componentProps = {
    list: props.nested ? { component: 'div', disablePadding: true } : {},
    listItem: props.nested ? { className: props.classes.nested } : {},
    listItemText: props.nested ? { inset: true } : {},
  };

  function handleClick() {
    setCollapse(!collapse);
  }

  return (
    <List {...componentProps.list}>
      {props.menus.map(menu => {
        if (menu.children) {
          return (
            <div key={menu.title}>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <MuiIcon
                    icon={menu.icon || ''}
                    className={props.classes.listIcon}
                  />
                </ListItemIcon>
                <ListItemText primary={menu.title} />
                {collapse ? (
                  <MuiIcon
                    icon="MdExpandLess"
                    className={props.classes.listIcon}
                  />
                ) : (
                  <MuiIcon
                    icon="MdExpandMore"
                    className={props.classes.listIcon}
                  />
                )}
              </ListItem>
              <Collapse in={collapse} timeout="auto" unmountOnExit>
                <NestedList
                  menus={menu.children}
                  nested={true}
                  classes={props.classes}
                />
              </Collapse>
            </div>
          );
        } else {
          return (
            <Link to={menu.path as string} key={menu.title}>
              <ListItem button {...componentProps.listItem}>
                <ListItemIcon>
                  <MuiIcon
                    icon={menu.icon || ''}
                    className={props.classes.listIcon}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={menu.title}
                  {...componentProps.listItemText}
                />
              </ListItem>
            </Link>
          );
        }
      })}
    </List>
  );
}
