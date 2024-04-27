import { Button, Form, FormProps, Input, Modal, Select, notification } from "antd";
import { FC, useEffect } from "react";
import { request } from "../../request";
import { AccountType } from "../../pages/app/Accounts";


interface MoneyTransferModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  accounts: AccountType[];
}

interface FormField {
  senderAccountNumber: string;
  receiverAccountNumber: string;
  amount: number;
};

const MoneyTransferModal: FC<MoneyTransferModalProps> = ({ isModalOpen, setIsModalOpen, accounts }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [isModalOpen]);



  const onFinish: FormProps<FormField>['onFinish'] = async (values) => {
    console.log({ values });

    try {

      await request("post", "http://localhost:8084/api/v1/transfer", {
        "transactionType": "TOP_UP",
        "senderAccountNumber": values.senderAccountNumber,
        "receiverAccountNumber": values.receiverAccountNumber,
        "relatedTransactionId": null,
        "amount": values.amount
      })

      notification.success({
        message: "Money transferred successfully"
      });
      form.resetFields();
      setIsModalOpen(false);
    } catch (error: any) {
      notification.error({
        
        message: error?.response?.data?.errorDetails?.length > 0
          ? error?.response?.data?.errorDetails[0]?.message
          : "Transfer processing failed"
      });
    }

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

        <Form.Item name="senderAccountNumber" rules={[{ required: true, message: "Please select sender account" }]}>
          <Select
            allowClear
            style={{ width: "100%" }}
            placeholder="Select currency"
            options={accounts.map(account => ({ label: account.accountName + " - " + account.accountNumber, value: account.accountNumber }))}
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="receiverAccountNumber"
          rules={[
            { required: true, message: "Please input receiver account number" }
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