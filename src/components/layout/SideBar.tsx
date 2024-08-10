/* eslint-disable @typescript-eslint/no-explicit-any */
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import logo from "../../assets/images/nexorion-icon-light.png";
import { facultyPaths } from "../../routes/faculty.routes";
import { useAppSelector } from "../../store/hooks";

const SideBar = ({
  trigger,
  collapsible,
  collapsed
}: {
  trigger: any;
  collapsible: any;
  collapsed: boolean;
}) => {
  const user = useAppSelector((state) => state?.auth?.user?.data);

  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student"
  };

  const role = user?.role;
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, "faculty");
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(adminPaths, "student");
      break;

    default:
      break;
  }

  return (
    <Sider
      trigger={trigger}
      collapsible={collapsible}
      collapsed={collapsed}
      width={300}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        height: "100vh",
        overflowY: "scroll"
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ width: "100px", padding: "20px" }} src={logo} alt="" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SideBar;
