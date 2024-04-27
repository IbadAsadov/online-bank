import { Divider, Modal, Typography } from "antd";
import { FC } from "react";
import { AccountDetails } from "../../pages/app/Accounts";

const { Paragraph, Text } = Typography;


interface MoneyTransferModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  data: AccountDetails | null;
}




const AccountDetailsModal: FC<MoneyTransferModalProps> = ({ isModalOpen, setIsModalOpen , data}) => {


  return (
    <Modal title="Account details" open={isModalOpen} onCancel={() => setIsModalOpen(false)
    } footer={null} >

      <Divider />

      <Paragraph >
        <Text strong>Account Number:</Text> <Text>{data?.accountNumber}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Balance:</Text> <Text>{data?.balance}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong>Account Status:</Text> <Text>{data?.accountStatus}</Text>
      </Paragraph>
    </Modal >
  )
}

export default AccountDetailsModal