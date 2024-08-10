import { DatePicker, Form, Tag, Typography } from "antd";
import { Controller } from "react-hook-form";

const { Text } = Typography;

type TSelectForm = {
  label: string;
  name: string;
  placeHolder?: string;
};

const OrionDatePicker = ({ label, name, placeHolder }: TSelectForm) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={<Text style={{ fontSize: "18px" }}>{label}</Text>}>
          <DatePicker
            style={{ width: "100%" }}
            {...field}
            name={name}
            placeholder={placeHolder}
            size="large"
            // onChange={(_date, dateString) => field.onChange(dateString)}
          />
          {error && (
            <Tag bordered={false} color="error" style={{ marginTop: "5px" }}>
              {error?.message}
            </Tag>
          )}
        </Form.Item>
      )}
    />
  );
};

export default OrionDatePicker;
