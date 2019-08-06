import React, { Component, FunctionComponent } from 'react';
import * as MuiIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import { JSXElement } from '@babel/types';

type MuiIconProps = {
  icon: string;
};

export default function MuiIcon({
  icon,
  ...props
}: MuiIconProps & React.HTMLAttributes<HTMLDivElement>) {
  let Icon = (MuiIcons as any)[icon];
  Icon = Icon || (FaIcons as any)[icon];

  return Icon ? <Icon {...props} /> : <div />;
}
