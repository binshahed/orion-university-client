import { Table } from "antd";
import { useGetAllAcademicSemesterQuery } from "../../../store/app/features/academicSemester/academicSemesterApi";
import { PageHeading } from "../../../components";

const AcademicSemester = () => {
  const { data, isLoading } = useGetAllAcademicSemesterQuery(undefined);

  const columns = [
    {
      title: "Semester Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year"
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
      key: "startMonth"
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
      key: "endMonth"
    }
  ];

  return (
    <div>
      <PageHeading>Academic Semester</PageHeading>
      <Table
        loading={isLoading}
        dataSource={data?.data}
        columns={columns}
        rowKey="_id"
      />
      ;
    </div>
  );
};

export default AcademicSemester;
