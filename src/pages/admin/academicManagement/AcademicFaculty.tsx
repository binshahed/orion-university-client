import { Table } from "antd";
import { PageHeading } from "../../../components";
import { useGetAllAcademicFacultiesQuery } from "../../../store/app/features/academicFaculty/academicFacultyApi";

const columns = [
  {
    title: "Faculty Name",
    dataIndex: "name",
    key: "name"
  }
];

const AcademicFaculty = () => {
  const { data, isLoading } = useGetAllAcademicFacultiesQuery(null);

  return (
    <div>
      <PageHeading>Academic Faculty</PageHeading>
      <Table
        loading={isLoading}
        dataSource={data?.data}
        columns={columns}
        rowKey="_id"
      />
    </div>
  );
};

export default AcademicFaculty;
