import { LockOutlined, UserOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import { Button, Flex, Form, Input, message } from "antd";
import "../../styles/signIn.css";
import { useLoginMutation } from "../../store/app/features/auth/authApi";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "../../store/app/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUserData } from "../../types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type FieldType = {
  id: string;
  password: string;
};

const SignIn = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const res = await login(values).unwrap();
    const user = (await verifyToken(res.data.accessToken)) as TUserData;
    dispatch(
      setUser({
        user: user,
        token: res.data.accessToken
      })
    );

    message.success("Login successful");

    toast.success("Login successful");

    navigate(`/${user?.data.role}/dashboard`);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const getErrorMessage = (error: FetchBaseQueryError | { error: string }) => {
    if ("data" in error) {
      return (error.data as { message?: string }).message ?? "Unknown error";
    }
    return error.error;
  };

  return (
    <Flex className="box-style">
      <div className="signIn-container">
        <h1 className="login-heading">Login</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: 400 }}
        >
          <Form.Item<FieldType>
            name="id"
            rules={[{ required: true, message: "Please input your userId!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="User Id"
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item>
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            {isError && (
              <p className="error">
                {getErrorMessage(error as FetchBaseQueryError)}
              </p>
            )}
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
};

export default SignIn;
