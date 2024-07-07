import { Button, Layout } from "antd";

const { Header, Content } = Layout;

import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../store/app/features/auth/authSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Redirect to login page
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
      <Layout>
        <Header
          style={{
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            paddingRight: "30px"
          }}
        >
          <Button onClick={handleLogout}>LogOut</Button>
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
