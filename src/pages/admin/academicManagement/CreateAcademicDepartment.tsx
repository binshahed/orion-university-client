/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import { PageHeading } from "../../../components";
import {
  OrionForm,
  OrionFormInput,
  OrionFormSelect
} from "../../../components/form";
import { useGetAllAcademicFacultiesQuery } from "../../../store/app/features/academicFaculty/academicFacultyApi";
import { useCreateAcademicDepartmentMutation } from "../../../store/app/features/academicDepartment/academicDepartmentApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAcademicDepartmentSchema } from "../../../schema/AcademicDepartmentSchema";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicDepartment = () => {
  const { data: academicFaculty } = useGetAllAcademicFacultiesQuery(null);

  const [createAcademicDepartment, { isLoading, isSuccess }] =
    useCreateAcademicDepartmentMutation();
  const faculties = academicFaculty?.data?.map((faculty: any) => {
    return { value: faculty._id, label: faculty.name };
  });

  const handleAcademicDepartment: SubmitHandler<FieldValues> = (data) => {
    createAcademicDepartment(data);
  };

  return (
    <div>
      <PageHeading>Create Academic Department</PageHeading>

      <OrionForm
        onSubmit={handleAcademicDepartment}
        resolver={zodResolver(createAcademicDepartmentSchema)}
        isSuccess={isSuccess}
      >
        <Row gutter={24}>
          <Col span={24} md={12} lg={12}>
            <OrionFormInput
              type="text"
              label="Name"
              name="name"
              placeholder="Enter Academic Department Name"
            />
          </Col>
          <Col span={24} md={12} lg={12}>
            <OrionFormSelect
              label="Academic Faculty"
              name="academicFaculty"
              options={faculties}
              placeHolder="Select Academic Faculty"
            />
          </Col>
        </Row>
        <Button
          loading={isLoading}
          htmlType="submit"
          type="primary"
          size="large"
        >
          Submit
        </Button>
      </OrionForm>
    </div>
  );
};

export default CreateAcademicDepartment;
