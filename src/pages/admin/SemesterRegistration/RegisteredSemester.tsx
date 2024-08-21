/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Dropdown, MenuProps, Space, Table } from "antd";
import { PageHeading } from "../../../components";
import {
  useGetAllRegisteredSemestersQuery,
  useUpdateSemesterRegistrationStatusMutation
} from "../../../store/app/features/SemesterRegistration/semesterRegistrationApi";
import moment from "moment";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const items: MenuProps["items"] = [
  {
    label: "UPCOMING",
    key: "UPCOMING"
  },
  {
    label: "ONGOING",
    key: "ONGOING"
  },
  {
    label: "ENDED",
    key: "ENDED"
  }
];

const RegisteredSemester = () => {
  // const [page, setPage] = useState(1);

  const [semesterId, setSemesterId] = useState("");

  const { data, isLoading } = useGetAllRegisteredSemestersQuery(undefined);
  const [updateSemesterRegistrationStatus, { isLoading: isUpdateLoading }] =
    useUpdateSemesterRegistrationStatusMutation();

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e.key);
    updateSemesterRegistrationStatus({
      id: semesterId,
      data: {
        status: e.key
      }
    });
  };

  const menuProps = {
    items,
    onClick: handleMenuClick
  };

  const columns = [
    {
      title: "Semester Name",
      dataIndex: "academicSemester",
      key: "academicSemester",
      render: (semesterName: { name: string }) => {
        return semesterName?.name;
      }
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      render: (date: string) => {
        return moment(new Date(date)).format("MMMM");
      }
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (date: string) => {
        return moment(new Date(date)).format("MMMM");
      }
    },
    {
      title: "Min Credit",
      dataIndex: "minCredit",
      key: "minCredit"
    },
    {
      title: "Max Credit",
      dataIndex: "maxCredit",
      key: "maxCredit"
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(record?._id)}>
              <Space>
                Update
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        );
      }
    }
  ];

  return (
    <div>
      <PageHeading>Student List</PageHeading>
      <Table
        loading={isLoading || isUpdateLoading}
        dataSource={data?.data}
        columns={columns}
        rowKey="_id"
      />
    </div>
  );
};

export default RegisteredSemester;
