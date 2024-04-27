import { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button, Col, Layout, Row, Typography } from "antd";
import { LogoutOutlined } from "@ant-design/icons";


const { Header, } = Layout;
const { Title } = Typography;


const headerStyle: React.CSSProperties = {
  height: 64,
  lineHeight: '64px',
  backgroundColor: 'white',
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: "20px",
  borderBottom: '1px solid #f0f0f0',
};


const RootPage: FC = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <Row justify="center" style={{ minHeight: "100vh" }}>
      <Col xs={22} sm={22} md={20} lg={20} xl={20}>
        <Header style={headerStyle}>
          <Title level={2}>Online Bank</Title>
          <Button onClick={handleLogout} style={{ fontSize: 17, marginTop: 20, lineHeight: "20px", cursor: "pointer" }}  >
            Logout <LogoutOutlined />
          </Button>
        </Header>
        <Outlet />
      </Col>
    </Row>
  );
};

export default RootPage;