import { Table } from "antd";
import { PageHeading } from "../../../components";
import { useGetAllRegisteredSemestersQuery } from "../../../store/app/features/SemesterRegistration/semesterRegistrationApi";

const RegisteredSemester = () => {
  // const [page, setPage] = useState(1);

  const { data, isLoading } = useGetAllRegisteredSemestersQuery(undefined);

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
      key: "startDate"
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate"
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
    }
  ];

  return (
    <div>
      <PageHeading>Student List</PageHeading>
      <Table
        loading={isLoading}
        dataSource={data?.data}
        columns={columns}
        rowKey="_id"
      />
    </div>
  );
};

export default RegisteredSemester;
