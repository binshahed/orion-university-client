/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, message, Row } from "antd";
import {
  OrionForm,
  OrionFormInput,
  OrionFormSelect
} from "../../../components/form";
import { PageHeading } from "../../../components";
import { SEMESTER_STATUS } from "../../../constants/semesters";

import { useGetAllAcademicSemesterQuery } from "../../../store/app/features/academicSemester/academicSemesterApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import OrionDatePicker from "../../../components/form/OrionDatePicker";
import { useCreateSemesterRegistrationMutation } from "../../../store/app/features/SemesterRegistration/semesterRegistrationApi";

const SemesterRegistration = () => {
  const { data: academicSemesterData, isLoading: isAcademicSemesterLoading } =
    useGetAllAcademicSemesterQuery(null);

  const [createSemesterRegistration, { isSuccess, isLoading }] =
    useCreateSemesterRegistrationMutation();

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    data.minCredit = Number(data.minCredit);
    data.maxCredit = Number(data.maxCredit);

    console.log(data);

    createSemesterRegistration(data);
  };

  if (isSuccess) {
    message.success("Academic Semester created successfully");
  }

  const SEMESTER_DATA = academicSemesterData?.data?.map((data: any) => ({
    value: data._id,
    label: `${data.name} ${data.year}`
  }));

  return (
    <div>
      <PageHeading>Semester Registration</PageHeading>
      <OrionForm onSubmit={handleSubmit}>
        <Row gutter={24}>
          <Col md={6} lg={6} span={24}>
            <OrionFormSelect
              loading={isAcademicSemesterLoading}
              label="Select Academic Semester"
              name="academicSemester"
              placeHolder="Academic Semester"
              options={SEMESTER_DATA}
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionFormSelect
              loading={isAcademicSemesterLoading}
              label="Status"
              name="status"
              placeHolder="Select Status"
              options={SEMESTER_STATUS}
            />
          </Col>

          <Col md={6} lg={6} span={24}>
            <OrionDatePicker
              label="Select Start Date"
              name="startDate"
              placeHolder="Select Start Date"
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionDatePicker
              label="Select End Date"
              name="endDate"
              placeHolder="Select End Date"
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionFormInput
              type="number"
              label="Minimum Credit "
              name="minCredit"
              placeholder="Enter a minimum credit"
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <OrionFormInput
              type="number"
              label="Maximum Credit "
              name="maxCredit"
              placeholder="Enter a Maximum credit"
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

export default SemesterRegistration;
