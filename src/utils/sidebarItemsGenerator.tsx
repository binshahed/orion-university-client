import { NavLink } from "react-router-dom";
import { TMenuItems, TSidebarItem } from "../types";

export const sidebarItemsGenerator = (items: TMenuItems[], role: string) => {
  const sideBarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.path,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.path!,
          label: <NavLink to={child.path!}>{child.name}</NavLink>
        }))
      });
    }

    return acc;
  }, []);

  return sideBarItems;
};
