/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { PageHeading } from "../../../components";
import { useGetStudentDetailsQuery } from "../../../store/app/features/userManagement/userManagementApi";
import { Avatar, Card, Col, Divider, Row, Skeleton } from "antd";

const StudentDetail = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetStudentDetailsQuery(id);

  if (isLoading) return <Skeleton />;

  const {
    name,
    email,
    profileImage,
    contactNo,
    emergencyContactNo,
    presentAddress,
    permanentAddress,
    gender,
    dateOfBirth,
    academicDepartment,
    admissionSemester,
    guardian,
    localGuardian
  } = data?.data as any;

  return (
    <div>
      <PageHeading>Student Detail</PageHeading>
      <Card loading={isLoading} style={{ minWidth: 300 }}>
        <Card.Meta
          avatar={
            <Avatar
              shape="square"
              style={{ border: "2px solid #929292", padding: "5px" }}
              size={100}
              src={profileImage}
            />
          }
          title={
            <p style={{ fontSize: "28px", fontWeight: "bold" }}>
              {name.firstName} {name?.middleName} {name?.lastName}
            </p>
          }
          description={
            <Row>
              <Col span={12}>
                <div style={{ color: "#000", fontSize: "18px" }}>
                  <Divider orientation="left">Personal Information</Divider>
                  <p>
                    <strong>Student Id:</strong> {id}
                  </p>
                  <p>
                    <strong>Email:</strong> {email}
                  </p>
                  <p>
                    <strong>Contact No:</strong> {contactNo}
                  </p>
                  <p>
                    <strong>Emergency Contact:</strong> {emergencyContactNo}
                  </p>
                  <p>
                    <strong>Gander:</strong> {gender}
                  </p>
                  <p>
                    <strong>Date Of Birth:</strong> {dateOfBirth}
                  </p>
                  <p>
                    <strong>Present Address:</strong> {presentAddress}
                  </p>
                  <p>
                    <strong>Permanent Address:</strong> {permanentAddress}
                  </p>
                  <p>
                    <strong>Academic Semester:</strong>{" "}
                    {admissionSemester?.name} {admissionSemester.year}
                  </p>
                  <p>
                    <strong>Academic Department:</strong>{" "}
                    {academicDepartment?.name}
                  </p>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ color: "#000", fontSize: "18px" }}>
                  <Divider orientation="left">Guardian Information</Divider>
                  <p>
                    <strong>Father Name :</strong> {guardian?.fatherName}
                  </p>
                  <p>
                    <strong>Father Contact No :</strong>{" "}
                    {guardian?.fatherContactNo}
                  </p>
                  <p>
                    <strong>Father Occupation :</strong>{" "}
                    {guardian?.fatherOccupation}
                  </p>
                  <p>
                    <strong>Mother Name :</strong> {guardian?.motherName}
                  </p>
                  <p>
                    <strong>Mother Contact No :</strong>{" "}
                    {guardian?.motherContactNo}
                  </p>
                  <p>
                    <strong>Mother Occupation :</strong>{" "}
                    {guardian?.motherOccupation}
                  </p>
                  <Divider orientation="left">
                    Local Guardian Information
                  </Divider>
                  <p>
                    <strong>Local Guardian Name :</strong> {localGuardian?.name}
                  </p>
                  <p>
                    <strong>Local Guardian Contact No :</strong>{" "}
                    {localGuardian?.contactNo}
                  </p>
                  <p>
                    <strong>Local Guardian Occupation :</strong>{" "}
                    {localGuardian?.occupation}
                  </p>
                  <p>
                    <strong>Local Guardian Address :</strong>{" "}
                    {localGuardian?.address}
                  </p>
                </div>
              </Col>
            </Row>
          }
        />
      </Card>
    </div>
  );
};

export default StudentDetail;
