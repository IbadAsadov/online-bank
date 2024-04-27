import { Button, Typography, Col, Flex, Form, Input, Row, FormProps, Select } from "antd";
import { currencies, statuses } from "../../constants";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

interface FormField {
  accountName: string;
  currency: string;
  status: string;
};

const CreateAccount = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish: FormProps<FormField>['onFinish'] = (values: any) => {
    console.log('Received values:', values);
    form.resetFields();
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  }


  return (
    <>
      <Flex wrap="wrap" style={{ margin: "20px 0px" }} align="center" justify="end">
        <Button onClick={handleBack}>Back</Button>
      </Flex>
      <Row justify="center" align="middle" style={{ marginTop: "30px" }}>
        <Col xs={22} sm={18} md={14} lg={10} xl={6}>
          <Title level={2} style={{ textAlign: "center" }}>Create Account</Title>
          <Form
            name="create-account-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="accountName"
              rules={[
                { required: true, message: "Please input account name" },
                { min: 4, message: "Must be minimum 4 characters" },
              ]}
            >
              <Input placeholder="Account name" size="large" />
            </Form.Item>

            <Form.Item name="currency" rules={[{ required: true, message: "Please select currency" }]}>
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Select currency"
                options={currencies}
                size="large"
              />
            </Form.Item>


            <Form.Item name="status" rules={[{ required: true, message: "Please select status" }]}>
              <Select
                allowClear
                style={{ width: "100%" }}
                placeholder="Select status"
                options={statuses}
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large" htmlType="submit" style={{ width: "100%" }}>
                Create
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>

  )
}

export default CreateAccount;