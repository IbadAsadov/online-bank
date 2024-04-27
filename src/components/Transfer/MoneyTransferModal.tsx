import { Button, Form, FormProps, Input, Modal } from "antd";
import { FC } from "react";


interface MoneyTransferModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

interface FormField {
  senderAccountNumber: string;
  receiverAccountNumber: string;
  amount: number;
};

const MoneyTransferModal: FC<MoneyTransferModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();



  const onFinish: FormProps<FormField>['onFinish'] = (values) => {
    console.log({ values });

    form.resetFields();
    setIsModalOpen(false);
  };


  return (
    <Modal title="Money transfer" open={isModalOpen} onCancel={() => setIsModalOpen(false)
    } footer={null} >
      <Form
        name="create-account-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}

      >
        <Form.Item
          name="senderAccountNumber"
          rules={[
            { required: true, message: "Please input sender account number" },
            { len: 16, message: "Must be 16 characters" },
          ]}
        >
          <Input placeholder="Sender account number" size="large" />
        </Form.Item>

        <Form.Item
          name="receiverAccountNumber"
          rules={[
            { required: true, message: "Please input receiver account number" },
            { len: 16, message: "Must be 16 characters" },
          ]}
        >
          <Input placeholder="Receiver account number" size="large" />
        </Form.Item>


        <Form.Item
          name="amount"
          rules={[
            { required: true, message: "Please input amount" },
          ]}
        >
          <Input placeholder="Amount" type="number" size="large" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large" htmlType="submit" style={{ width: "100%" }}>
            Transfer
          </Button>
        </Form.Item>
      </Form>
    </Modal >
  )
}

export default MoneyTransferModal