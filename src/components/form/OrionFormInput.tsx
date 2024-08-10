import { Form, Input, Tag, Typography } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
};

const { Text } = Typography;

const OrionFormInput = ({
  type,
  name,
  label,
  placeholder,
  required,
  disabled
}: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={
              <Text style={{ fontSize: "18px" }}>
                {label}
                {required && <span style={{ color: "red" }}>*</span>}
              </Text>
            }
          >
            <Input
              {...field}
              required={required}
              type={type}
              id={name}
              size="large"
              disabled={disabled}
              placeholder={placeholder}
            />
            {error && (
              <Tag bordered={false} color="error" style={{ marginTop: "5px" }}>
                {error.message}
              </Tag>
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default OrionFormInput;
