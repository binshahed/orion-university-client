import { Table } from "antd";
import { PageHeading } from "../../../components";
import { useGetAllAcademicDepartmentsQuery } from "../../../store/app/features/academicDepartment/academicDepartmentApi";

const columns = [
  {
    title: "Department Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Faculty Name",
    dataIndex: "academicFaculty",
    key: "academicFaculty",
    render: (facultyName: { name: string }) => {
      return facultyName?.name;
    }
  }
];

const AcademicDepartment = () => {
  const { data, isLoading } = useGetAllAcademicDepartmentsQuery(null);

  return (
    <div>
      <PageHeading>Academic Department</PageHeading>
      <Table
        loading={isLoading}
        dataSource={data?.data}
        columns={columns}
        rowKey="_id"
      />
    </div>
  );
};

export default AcademicDepartment;
