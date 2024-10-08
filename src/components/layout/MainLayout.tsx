import { Button, Layout, theme } from "antd";

const { Header, Content } = Layout;

import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/app/features/auth/authSlice";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Redirect to login page
  };

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Layout>
      <SideBar trigger={null} collapsible collapsed={collapsed} />
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "30px",
            fontSize: "18px",
            fontWeight: "bold",
            position: "sticky",
            top: "0px",
            zIndex: "100",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64
            }}
          />
          <Button onClick={handleLogout} danger>
            LogOut
          </Button>
        </Header>
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
        {/* <Footer style={{ textAlign: "center" }}>
          Copyright ©{new Date().getFullYear()} NexOrion -All Rights Reserved
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
