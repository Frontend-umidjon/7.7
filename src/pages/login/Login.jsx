import React from "react";
import { Form, Input, Button, Typography, notification } from "antd";
import { useLoginMutation } from "../../redux/api/auth.api";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/auth.slice";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
  const [api, contextHolder] = notification.useNotification();
  const [signin, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    signin({ ...values, expiresInMins: 10 }) // 10 min
      .unwrap()
      .then((res) => {
        dispatch(login(res.accessToken));
        navigate("/admin/groups");
      })
      .catch(() => {
        api.error({
          message: "Username or password is incorrect",
          placement: "bottomRight",
        });
      });
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="border border-gray-700 rounded-lg p-6 shadow-lg max-w-sm w-full bg-gray-800">
        <Title level={3} className="text-blue-400 text-center">Sign In</Title>
        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label={<span className="text-white">Username</span>}
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" className="bg-gray-700 text-white border-none" />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" className="bg-gray-700 text-white border-none" />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={isLoading} 
              disabled={isLoading} 
              className="w-full"
            >
              Submit
            </Button>
          </Form.Item>

          <Form.Item>
            <Button 
              onClick={() => navigate("/")} 
              className="w-full bg-gray-700 hover:bg-gray-600 text-white"
            >
              Go Home
            </Button>
          </Form.Item>
        </Form>
      </div>
      {contextHolder}
    </section>
  );
};

export default Login;
