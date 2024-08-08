/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Flex,
  Form,
  Row,
  Typography
} from "antd";
import { OrionForm, OrionFormSelect } from "../../../components/form";
import { PageHeading } from "../../../components";
import dayjs from "dayjs";

const nameOptions = [
  { label: "Autumn", value: "01" },
  { label: "Summer", value: "02" },
  { label: "Fall", value: "03" }
];

// Disable days before today and any previous months
const disabledDate: DatePickerProps["disabledDate"] = (current) => {
  return current && current < dayjs().startOf("day");
};

const onYear: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const { Text } = Typography;

const CreateAcademicSemester = () => {
  const handleSubmit = (data: any) => {
    const name = nameOptions[Number(data.name) - 1].label;
    const code = data.name;

    console.log({ name, code });
  };

  return (
    <div>
      <PageHeading>Create Academic Semester</PageHeading>
      <OrionForm onSubmit={handleSubmit}>
        <Row gutter={24}>
          <Col md={6} lg={6} span={24}>
            <OrionFormSelect
              label="Select Name"
              name="name"
              placeHolder="Select Academic Semester Name"
              options={nameOptions}
            />
          </Col>
          <Col md={6} lg={6} span={24}>
            <Form.Item
              label={<Text style={{ fontSize: "18px" }}>Select Year</Text>}
            >
              <DatePicker
                style={{ width: "100%" }}
                onChange={onYear}
                picker="year"
                size="large"
                disabledDate={disabledDate}
              />
            </Form.Item>
          </Col>
          <Col md={6} lg={6} span={24}>
            <Form.Item
              label={<Text style={{ fontSize: "18px" }}>Select Month</Text>}
            >
              <DatePicker
                disabledDate={disabledDate}
                style={{ width: "100%" }}
                onChange={onYear}
                picker="month"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col md={6} lg={6} span={24}>
            <Form.Item
              label={<Text style={{ fontSize: "18px" }}>Select Date</Text>}
            >
              <DatePicker
                disabledDate={disabledDate}
                style={{ width: "100%" }}
                onChange={onYear}
                size="large"
                picker="month"
              />
            </Form.Item>
          </Col>
        </Row>
        <Flex vertical align="flex-end">
          <Button htmlType="submit" type="primary" size="large">
            Submit
          </Button>
        </Flex>
      </OrionForm>
    </div>
  );
};

export default CreateAcademicSemester;
