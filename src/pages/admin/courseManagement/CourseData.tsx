/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Tag } from "antd";
import { PageHeading } from "../../../components";
import { useGetAllCourseQuery } from "../../../store/app/features/course/courseApi";
import AssignFacultyModal from "../../../components/modals/AssignFacultyModal";

const CourseData = () => {
  // const [page, setPage] = useState(1);

  const { data, isLoading } = useGetAllCourseQuery(undefined);

  const columns = [
    {
      title: "Course Title",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Course Code",
      dataIndex: "code",
      key: "code"
    },
    {
      title: "Course Prefix",
      dataIndex: "prefix",
      key: "prefix"
    },
    {
      title: "PrerequisiteCourses",
      dataIndex: "prerequisiteCourses",
      key: "prerequisiteCourses",
      render: (record: any) => {
        return record.map((cData: any) => <Tag>{cData.course.title}</Tag>);
      }
    },
    {
      title: "Assign Facility",

      render: (record: any) => {
        return <AssignFacultyModal data={record} />;
      }
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

export default CourseData;
