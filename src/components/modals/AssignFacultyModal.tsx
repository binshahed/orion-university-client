/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Modal } from "antd";
import { useState } from "react";
import { OrionForm } from "../form";
import OrionFormMultipleSelect from "../form/OrionFormMultipleSelect";

const AssignFacultyModal = ({ data }: { data: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {} = useGet;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (data) => {
    console.log(data);

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal
        title="Assign Faculty"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <OrionForm onSubmit={handleOk}>
          <OrionFormMultipleSelect
            label="Select Faculties"
            name="faculties"
            options={[
              { label: "Faculty 1", value: "1" },
              { label: "Faculty 2", value: "2" },
              { label: "Faculty 3", value: "3" },
              { label: "Faculty 4", value: "4" },
              { label: "Faculty 5", value: "5" }
            ]}
          />
          <Flex vertical align="flex-end">
            <Button
              //   loading={isLoading}
              htmlType="submit"
              type="primary"
              size="large"
            >
              Submit
            </Button>
          </Flex>
        </OrionForm>
      </Modal>
    </>
  );
};

export default AssignFacultyModal;
