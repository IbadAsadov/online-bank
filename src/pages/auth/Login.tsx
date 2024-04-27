import { FC } from 'react';
import { Button, Card, Col, Form, FormProps, Input, Row } from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';


interface FormField {
  pin: string;
  password: string;
};

const Login: FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish: FormProps<FormField>['onFinish'] = (values) => {
    console.log('Success:', values);
    form.resetFields();
    navigate('/');
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col xs={22} sm={18} md={14} lg={10} xl={6}>
        <Card title="Welcome Online Bank">
          <Form
            form={form}
            name="login-form"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="pin"
              rules={[
                {
                  required: true,
                  message: 'PIN is required'
                },
                {
                  len: 7,
                  message: 'PIN must be 7 characters'
                }
              ]}
            >
              <Input prefix={<UserOutlined />} size="large" placeholder="PIN" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Password is required'
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters'
                }
              ]}
            >
              <Input.Password prefix={<KeyOutlined />} size="large" placeholder='Password' />
            </Form.Item>

            <Row>
              <Col span={24}>
                <Button type="primary" htmlType="submit" block size="large">Login</Button>
              </Col>
              <Col span={24}>
                <Link to="/register">
                  <Button type="link" block size="large">Register</Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </Card>

      </Col>
    </Row >
  )
};

export default Login;