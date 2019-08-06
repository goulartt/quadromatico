import { RouteProps } from 'react-router';

export default interface RouteConfig extends RouteProps {
  id: number;
  parentId?: number;
  title: string;
  icon?: string;
  componentType?: string;
  children?: RouteConfig[];
}
