import { Button, Flex, Space, Table, TableProps, Typography, } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoneyTransferModal from "../../components/Transfer/MoneyTransferModal";
import { EyeOutlined } from "@ant-design/icons";
import AccountDetailsModal from "../../components/Account/AccountDetailsModal";


const { Title } = Typography;

interface AccountType {
  accountNumber: string;
}

const Accounts = () => {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState<boolean>(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const columns: TableProps<AccountType>["columns"] = [
    {
      title: "Account Number",
      dataIndex: "accountNumber",
      key: 'accountNumber',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      align: "right",
      render: (_, record) => {
        console.log({ record });

        return (
          <Space size="middle">
            <Button type="default" onClick={() => setIsAccountModalOpen(true)}>
              View <EyeOutlined />
            </Button>
          </Space >
        );
      },
    },
  ];

  const data: AccountType[] = [
    ...Array.from({ length: 20 }, () => ({
      accountNumber: Math.random().toString(36).substring(2),
    })),
  ];


  return (
    <>
      <Flex wrap="wrap" align="center" justify="space-between">
        <Title level={3}>Accounts</Title>
        <ButtonGroup style={{ display: "flex", gap: "20px" }}>
          <Button onClick={() => setIsTransferModalOpen(true)}>Money transfer</Button>
          <Button type="primary" onClick={() => navigate("/create-account")} >Create Account</Button>
        </ButtonGroup>
      </Flex>
      <Table columns={columns} dataSource={data} pagination={false} />


      <MoneyTransferModal isModalOpen={isTransferModalOpen} setIsModalOpen={setIsTransferModalOpen} />
      <AccountDetailsModal isModalOpen={isAccountModalOpen} setIsModalOpen={setIsAccountModalOpen} />

    </>
  )
}

export default Accounts;