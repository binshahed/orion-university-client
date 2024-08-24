import { Form, Select, Space, Tag, Typography } from "antd";
import { Controller } from "react-hook-form";

const { Text } = Typography;

type TSelectForm = {
  label: string;
  name: string;
  placeholder?: string;
  loading?: boolean;
  defaultValue?: string[];
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

const OrionFormMultipleSelect = ({
  label,
  name,
  placeholder,
  options,
  loading,
  defaultValue
}: TSelectForm) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={<Text style={{ fontSize: "18px" }}>{label}</Text>}>
          <Select
            mode="multiple"
            loading={loading}
            {...field}
            size="large"
            placeholder={placeholder}
            options={options}
            defaultValue={defaultValue}
            // onChange={handleChange}
            optionRender={(option) => <Space> {option.data.label}</Space>}
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

export default OrionFormMultipleSelect;
