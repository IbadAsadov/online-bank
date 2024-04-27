import { Divider, Modal, Typography } from "antd";
import { FC } from "react";

const { Paragraph, Text } = Typography;


interface MoneyTransferModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const accountDetails = {
  accountNumber: "4498bb6f5-7aee-445e-bb76-2cf9b9178f3",
  balance: 12.1,
  accountStatus: "ACTIVE"
}


const AccountDetailsModal: FC<MoneyTransferModalProps> = ({ isModalOpen, setIsModalOpen }) => {


  return (
    <Modal title="Account details" open={isModalOpen} onCancel={() => setIsModalOpen(false)
    } footer={null} >

      <Divider />

      <Paragraph >
        <Text strong>Account Number:</Text> <Text>{accountDetails.accountNumber}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Balance:</Text> <Text>${accountDetails.balance.toFixed(2)}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Account Status:</Text> <Text>{accountDetails.accountStatus}</Text>
      </Paragraph>
    </Modal >
  )
}

export default AccountDetailsModal