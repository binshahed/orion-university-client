import { Button, Col, Flex, message, Row } from "antd";
import { OrionForm, OrionFormSelect } from "../../../components/form";
import { PageHeading } from "../../../components";
import { SEMESTER_OPTIONS } from "../../../constants/semesters";
import { createAcademicSemesterSchema } from "../../../schema/createAcademicSemesterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { lastFiveYears, MONTH_OPTIONS } from "../../../utils";
import { TCreateAcademicSemester } from "../../../types/academicSemester.type";
import { useCreateAcademicSemesterSchematicMutation } from "../../../store/app/features/academicSemester/academicSemesterApi";
import { MONTHS } from "../../../constants/months";

const CreateAcademicSemester = () => {
  const [createAcademicSemesterSchematic, { isSuccess, isLoading }] =
    useCreateAcademicSemesterSchematicMutation();

  const handleSubmit = (data: Partial<TCreateAcademicSemester>) => {
    const name = SEMESTER_OPTIONS[Number(data.name) - 1].label;
    const code = data.name;

    createAcademicSemesterSchematic({
      name,
      code,
      year: data.year,
      startMonth: MONTHS[Number(data?.startMonth) - 1],
      endMonth: MONTHS[Number(data?.endMonth) - 1]
    });
  };

  if (isSuccess) {
    message.success("Academic Semester created successfully");
  }

  return (
    <div>
      <PageHeading>Create Academic Semester</PageHeading>
      <OrionForm
        onSubmit={handleSubmit}
        resolver={zodResolver(createAcademicSemesterSchema)}
      >
        <Row gutter={24}>
          <Col md={6} lg={6} span={24}>
            <OrionFormSelect
              label="Select Name"
              name="name"
              placeHolder="Select Academic Semester Name"
              options={SEMESTER_OPTIONS}
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionFormSelect
              label="Select Year"
              name="year"
              placeHolder="Select Year"
              options={lastFiveYears}
            />
          </Col>

          <Col md={6} lg={6} span={24}>
            <OrionFormSelect
              label="Select Start Month"
              name="startMonth"
              placeHolder="Select Start Month"
              options={MONTH_OPTIONS}
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionFormSelect
              label="Select End Month"
              name="endMonth"
              placeHolder="Select End Month"
              options={MONTH_OPTIONS}
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

export default CreateAcademicSemester;
