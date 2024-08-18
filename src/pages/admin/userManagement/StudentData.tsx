/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Pagination, Table, Tooltip } from "antd";
import { PageHeading } from "../../../components";
import {
  useDeleteStudentMutation,
  useGetAllStudentQuery
} from "../../../store/app/features/userManagement/userManagementApi";
import { useState } from "react";
import {
  DeleteOutlined,
  EditFilled,
  ExclamationCircleOutlined,
  StopOutlined
} from "@ant-design/icons";
import ButtonGroup from "antd/es/button/button-group";
import { Link } from "react-router-dom";

const StudentData = () => {
  const [page, setPage] = useState(1);
  const [modal, contextHolder] = Modal.useModal();

  const { data: studentData, isLoading } = useGetAllStudentQuery([
    // { name: "email", value: "mdbinshahedtest@gmail.com" }
    { name: "limit", value: 10 },
    { name: "page", value: page }
  ]);

  const [deleteStudent, { isLoading: isLoadingDelete }] =
    useDeleteStudentMutation();

  const handleDeleteStudent = (id: string) => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Bla bla ...",
      okText: "Delete",
      onOk: () => {
        deleteStudent(id);
      },
      cancelText: "Cancel"
    });
  };

  const columns = [
    {
      title: "Student Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (
        name: {
          firstName: string;
          middleName?: string;
          lastName: string;
        },
        record: any
      ) => {
        return (
          <Link to={`/admin/student/${record.id}`}>
            {" "}
            {name?.firstName +
              " " +
              (name?.middleName ? name?.middleName : "") +
              " " +
              name?.lastName}{" "}
          </Link>
        );
      }
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
      key: "contactNo"
    },
    {
      title: "Present Address",
      dataIndex: "presentAddress",
      key: "presentAddress"
    },

    {
      title: "Guardian Information",
      dataIndex: "localGuardian",
      key: "localGuardian",
      render: (localGuardian: { name: string; contactNo: string }) => {
        return localGuardian.name + " " + localGuardian.contactNo;
      }
    },
    {
      title: "Academic Department",
      dataIndex: "academicDepartment",
      key: "academicDepartment",
      render: (academicDepartment: { name: string }) => {
        return academicDepartment.name;
      }
    },
    {
      title: "Academic Semester",
      dataIndex: "admissionSemester",
      key: "admissionSemester",
      render: (admissionSemester: { name: string; year: string }) => {
        return admissionSemester.name + " " + admissionSemester.year;
      }
    },
    {
      title: "Action",

      render: (record: any) => {
        return (
          <ButtonGroup>
            <Tooltip title="Edit" placement="bottom">
              <Button type="primary">
                <EditFilled />
              </Button>
            </Tooltip>
            <Tooltip title="Delete" placement="bottom">
              <Button
                type="primary"
                danger
                onClick={() => handleDeleteStudent(record?.id)}
                loading={isLoadingDelete}
              >
                <DeleteOutlined />
              </Button>
            </Tooltip>
            <Tooltip title="Block" placement="bottom">
              <Button danger>
                <StopOutlined />
              </Button>
            </Tooltip>
          </ButtonGroup>
        );
      }
    }
  ];

  return (
    <div>
      <PageHeading>Student List</PageHeading>
      <Table
        loading={isLoading}
        dataSource={studentData?.data?.result}
        columns={columns}
        rowKey="_id"
        pagination={false}
      />
      <Pagination
        style={{ marginTop: "10px" }}
        align="end"
        onChange={(value) => setPage(value)}
        defaultCurrent={1}
        pageSize={studentData?.data?.meta?.limit}
        total={studentData?.data?.meta?.total}
      />
      {contextHolder}
    </div>
  );
};

export default StudentData;
