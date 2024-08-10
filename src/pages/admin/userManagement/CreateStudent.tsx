/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { PageHeading } from "../../../components";
import {
  OrionForm,
  OrionFormInput,
  OrionFormSelect
} from "../../../components/form";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import OrionDatePicker from "../../../components/form/OrionDatePicker";
import { getFullDateString } from "../../../utils/generateDate";
import { useGetAllAcademicDepartmentsQuery } from "../../../store/app/features/academicDepartment/academicDepartmentApi";
import { useGetAllAcademicSemesterQuery } from "../../../store/app/features/academicSemester/academicSemesterApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { createStudentSchema } from "../../../schema/userManagementSchema/studentSchema";
import { useCreateStudentMutation } from "../../../store/app/features/userManagement/userManagementApi";

const dummyData = {
  name: {
    firstName: "Shahed",
    middleName: "A",
    lastName: "Doe"
  },
  // dateOfBirth: "1998-01-01",
  gender: "male",
  email: "mdbinshahedNew@gmail.com",
  contactNo: "123-456-7890",
  emergencyContact: "Jane Doe",
  emergencyContactNo: "123-456-789",
  presentAddress: "123 Main St, Anytown, USA",
  permanentAddress: "456 Elm St, Hometown, USA",
  guardian: {
    fatherName: "James Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "111-222-3333",
    motherName: "Emily Doe",
    motherOccupation: "Teacher",
    motherContactNo: "444-555-6666"
  },
  localGuardian: {
    name: "Sarah Johnson",
    occupation: "Nurse",
    contactNo: "777-888-9999",
    address: "789 Maple St, Nearbytown, USA"
  },
  academicDepartment: "6656f5dcad2ca1210d99229e",
  admissionSemester: "6656d7b7f490ae723ffd8f96",
  isDeleted: false
};

const CreateStudent = () => {
  const { data: academicDepartment } = useGetAllAcademicDepartmentsQuery(null);
  const { data: academicSemester } = useGetAllAcademicSemesterQuery(null);

  const [createStudent, { isSuccess, isLoading }] = useCreateStudentMutation();

  const handleCreateStudent: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    const studentData = {
      password: "123456",
      studentData: data
    };

    // Convert the date to the correct format
    const fullDate = getFullDateString(data?.dateOfBirth);
    data.dateOfBirth = fullDate;

    const formData = new FormData();
    // Append the stringified data to the formData
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data?.profileImage);

    createStudent(formData);
  };

  return (
    <div style={{ paddingBottom: "100px" }}>
      <PageHeading>Create Student</PageHeading>

      <OrionForm
        defaultValues={dummyData}
        onSubmit={handleCreateStudent}
        isSuccess={isSuccess}
        resolver={zodResolver(createStudentSchema)}
      >
        <Divider>Personal Information</Divider>
        <Row gutter={24}>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="name.firstName"
              label="First Name"
              placeholder="Enter First Name"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="name.middleName"
              label="Middle Name"
              placeholder="Enter Middle Name"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="name.lastName"
              label="Last Name"
              placeholder="Enter Last Name"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionDatePicker name="dateOfBirth" label="Date Of Birth" />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormSelect
              name="gender"
              label="Gander"
              placeHolder="Select Gander"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" }
              ]}
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="email"
              name="email"
              label="Email"
              placeholder="Enter Email"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="contactNo"
              label="Contact No"
              placeholder="Enter Contact No"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="emergencyContact"
              label="Emergency Contact No"
              placeholder="Enter Emergency Contact No"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="emergencyContactNo"
              label="Emergency Contact Number"
              placeholder="Enter Emergency Contact No"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="presentAddress"
              label="Present Address"
              placeholder="Enter Present Address"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="permanentAddress"
              label="Permanent Address"
              placeholder="Enter Permanent Address"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <Controller
              name="profileImage"
              // control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <Form.Item
                  label={<div style={{ fontSize: "18px" }}>Upload Image</div>}
                >
                  <Input
                    {...field}
                    type="file"
                    size="large"
                    value={value?.fileName}
                    onChange={(e) => onChange(e.target.files?.[0])}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>

        <Divider>Guardian Information</Divider>
        <Row gutter={24}>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="guardian.fatherName"
              label="Father Name"
              placeholder="Enter Father Name"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="guardian.fatherOccupation"
              label="Father Occupation"
              placeholder="Enter Father Occupation"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="guardian.fatherContactNo"
              label="Father Contact No"
              placeholder="Enter Father Contact No"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="guardian.motherName"
              label="Mother Name"
              placeholder="Enter Mother Name"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="guardian.motherOccupation"
              label="Mother Occupation"
              placeholder="Enter Mother Occupation"
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormInput
              type="text"
              name="guardian.motherContactNo"
              label="Mother Contact No"
              placeholder="Enter Mother Contact No"
            />
          </Col>
        </Row>

        <Divider>Local Guardian</Divider>
        <Row gutter={24}>
          <Col span={24} md={6} lg={6}>
            <OrionFormInput
              type="text"
              name="localGuardian.name"
              label="Local Guardian Name"
              placeholder="Enter Local Guardian Name"
            />
          </Col>
          <Col span={24} md={6} lg={6}>
            <OrionFormInput
              type="text"
              name="localGuardian.occupation"
              label="Local Guardian Occupation"
              placeholder="Enter Local Guardian Occupation"
            />
          </Col>
          <Col span={24} md={6} lg={6}>
            <OrionFormInput
              type="text"
              name="localGuardian.contactNo"
              label="Local Guardian Contact No"
              placeholder="Enter Local Guardian Contact No"
            />
          </Col>
          <Col span={24} md={6} lg={6}>
            <OrionFormInput
              type="text"
              name="localGuardian.address"
              label="Local Guardian Address"
              placeholder="Enter Local Guardian Address"
            />
          </Col>
        </Row>

        <Divider>Academic Information</Divider>
        <Row gutter={24}>
          <Col span={24} md={8} lg={8}>
            <OrionFormSelect
              name="academicDepartment"
              label="Academic Department"
              placeHolder="Select Academic Department"
              options={academicDepartment?.data?.map((department: any) => ({
                label: department.name,
                value: department._id
              }))}
            />
          </Col>
          <Col span={24} md={8} lg={8}>
            <OrionFormSelect
              name="admissionSemester"
              label="Admission Semester"
              placeHolder="Select Admission Semester"
              options={academicSemester?.data?.map((semester: any) => ({
                label: semester.name + ` (${semester.year})`,
                value: semester._id
              }))}
            />
          </Col>
        </Row>

        {/* submit button */}
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

export default CreateStudent;
