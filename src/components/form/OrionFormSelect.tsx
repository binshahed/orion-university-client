import { Form, Select, Tag, Typography } from "antd";
import { Controller } from "react-hook-form";

const { Text } = Typography;

type TSelectForm = {
  label: string;
  name: string;
  placeHolder?: string;
  loading?: boolean;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

const OrionFormSelect = ({
  label,
  name,
  placeHolder,
  options,
  loading
}: TSelectForm) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={<Text style={{ fontSize: "18px" }}>{label}</Text>}>
          <Select
            loading={loading}
            {...field}
            size="large"
            placeholder={placeHolder}
            options={options}
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

export default OrionFormSelect;
