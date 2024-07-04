import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
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
