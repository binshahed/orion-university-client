/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Row } from "antd";
import { PageHeading } from "../../../components";
import { OrionForm, OrionFormInput } from "../../../components/form";
import OrionFormMultipleSelect from "../../../components/form/OrionFormMultipleSelect";
import {
  useCreateCorseMutation,
  useGetAllCourseQuery
} from "../../../store/app/features/course/courseApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCourseSchema } from "../../../schema/course";

const CreateCourse = () => {
  const { data: courseData, isLoading: isCourseLoading } =
    useGetAllCourseQuery(undefined);

  const [createCorse, { isLoading }] = useCreateCorseMutation();

  const handleSubmit = (data: any) => {
    const prerequisiteCoursesData = data.prerequisiteCourses.map(
      (pCourse: string) => ({
        course: pCourse
      })
    );

    data.prerequisiteCourses = prerequisiteCoursesData;
    data.code = Number(data.code);
    data.credits = Number(data.credits);

    createCorse(data);
  };

  const prerequisiteCourseOptions = courseData?.data?.map((data: any) => ({
    label: data.title,
    value: data._id.toString()
  }));

  return (
    <div>
      <PageHeading>Create Course</PageHeading>

      <OrionForm
        onSubmit={handleSubmit}
        resolver={zodResolver(createCourseSchema)}
      >
        <Row gutter={24}>
          <Col md={6} lg={6} span={24}>
            <OrionFormInput
              type="text"
              label="Course Title"
              name="title"
              placeholder="Enter Course Title"
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionFormInput
              type="number"
              label="Course code"
              name="code"
              placeholder="Enter Course Code"
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionFormInput
              type="text"
              label="Prefix"
              name="prefix"
              placeholder="Enter Course Prefix"
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionFormInput
              type="number"
              label="Credits"
              name="credits"
              placeholder="Enter Course Credits"
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionFormMultipleSelect
              loading={isCourseLoading}
              label="Credits"
              name="prerequisiteCourses"
              placeholder="Select Prerequisite Courses"
              //   placeholder="Enter Course Credits"
              options={prerequisiteCourseOptions}
            />
          </Col>
        </Row>
        <Flex vertical align="flex-end">
          <Button
            loading={isLoading}
            htmlType="submit"
            type="primary"
            size="large"
          >
            Submit
          </Button>
        </Flex>
      </OrionForm>
    </div>
  );
};

export default CreateCourse;
