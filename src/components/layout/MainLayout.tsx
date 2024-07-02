import { Layout, Menu, MenuProps } from "antd";

const { Header, Content, Footer, Sider } = Layout;

import logo from "../../assets/images/nexorion-icon-light.png";
import { NavLink, Outlet } from "react-router-dom";
import { sideBarItems } from "../../routes/admin.routes";

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>
  },
  {
    key: "User Management",
    label: "User Management",
    children: [
      {
        key: "Create Admin",
        label: <NavLink to="create-admin">Create Admin</NavLink>
      },
      {
        key: "Create Faculty",
        label: <NavLink to="create-faculty">Create Faculty</NavLink>
      },
      {
        key: "Create Student",
        label: <NavLink to="create-student">Create Student</NavLink>
      }
    ]
  }
];
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: "100px", padding: "20px" }} src={logo} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sideBarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright ©{new Date().getFullYear()} NexOrion -All Rights Reserved
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
