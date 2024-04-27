import { Button, Flex, Space, Table, TableProps, Typography, notification, } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoneyTransferModal from "../../components/Transfer/MoneyTransferModal";
import { EyeOutlined } from "@ant-design/icons";
import AccountDetailsModal from "../../components/Account/AccountDetailsModal";
import { request } from "../../request";


const { Title } = Typography;

export interface AccountType {
  accountName: string;
  accountNumber: string;
  balance: number;
  createdAt: string;
}

export interface AccountDetails {
  accountNumber: string;
  accountStatus: string;
  balance: number;
}


const Accounts = () => {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState<boolean>(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [details, setDetails] = useState<AccountDetails | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await request("get", "http://localhost:8087/api/v1/accounts");

        setAccounts(response.data);
      } catch (error) {
        console.log({ error });
      }
    }

    getAccounts();

  }, []);

  const getAccountDetails = async (accountNumber: string) => {

    try {
      const response = await request("post", `http://localhost:8087/api/v1/accounts/details`, { accountNumber });

      setDetails(response.data);
      setIsAccountModalOpen(true);

    } catch (error) {
      setDetails(null);
      setIsAccountModalOpen(false);
      notification.error({
        message: "Failed to get account details"
      });
      console.log({ error });
    }
  };

  const columns: TableProps<AccountType>["columns"] = [
    {
      title: "Account Name",
      dataIndex: "accountName",
      key: 'accountName',
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: 'createdAt',
      render: (text) => {
        return new Date(text).toLocaleDateString();
      }
    },
    {
      title: 'Action',
      key: 'action',
      align: "right",
      render: (_, record) => {
        return (
          <Space size="middle">
            <Button type="default" onClick={() => getAccountDetails(record.accountNumber)}>
              View <EyeOutlined />
            </Button>
          </Space >
        );
      },
    },
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
      <Table columns={columns} dataSource={accounts} pagination={false} />


      <MoneyTransferModal isModalOpen={isTransferModalOpen} setIsModalOpen={setIsTransferModalOpen} accounts={accounts} />
      <AccountDetailsModal isModalOpen={isAccountModalOpen} setIsModalOpen={setIsAccountModalOpen} data={details} />

    </>
  )
}

export default Accounts;