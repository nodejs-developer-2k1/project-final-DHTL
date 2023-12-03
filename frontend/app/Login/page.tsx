"use client";
import Link from "next/link";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Register from "../../components/popup/register";
import { useState } from "react";
export default function Login() {
  const [popUpRegister, setpopUpRegister] = useState(false);
  const tatPopUpRegister = () => {
    setpopUpRegister(false)
  }
  return (

    <div className="w-full h-screen">
      <div className="flex w-full h-screen justify-center items-center gap-5">
        <div className="
                  flex
                  justify-center
                  items-center
                  max-lg:hidden
        ">
          <div>
            <span className="text-6xl text-blue-600 font-bold">Bluebook</span>
            <br></br>
            <span className="text-3xl font-normal">
              {" "}
              Bluebook giúp bạn kết nối và chia sẻ
            </span>
            <br></br>
            <span className="text-3xl font-normal">
              với mọi người trong cuộc sống của bạn.
            </span>
          </div>
        </div>
        <div className="body-right">

          <div className="rounded bg-white shadow-2xl flex-row px-5 pt-5 pb-1">
            <Form
              name="normal_login"
              className="login-form "
              initialValues={{
                remember: true,
              }}
            // onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input placeholder="Email hoặc số điện thoại" className="
                w-96 h-16
                max-sm:w-60
                max-sm:h-10
                " />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-96 h-16
                  max-sm:w-60
                max-sm:h-10"
                />
              </Form.Item>

              <Form.Item>
                <div className="flex flex-col justify-center items-center">
                  <Button type="primary" htmlType="submit"
                    className=" 
                  w-96 
                  h-16
                 bg-blue-600 
                 text-xl 
                 font-bold
                 max-sm:w-60
                max-sm:h-10
                  text-white">
                    Đăng nhập
                  </Button>
                  <Link href={"#"} className="mt-2">Quên mật khẩu</Link>
                </div>
              </Form.Item>

              <Form.Item>
                <Button
                  onClick={() => setpopUpRegister(true)}
                  className=" 
                  w-96 
                  h-16
                  bg-green-600
                 text-xl 
                 font-bold
                 max-sm:w-60
                max-sm:h-10
                  text-white">
                  Tạo tài khoản mới
                </Button>
              </Form.Item>
            </Form>

          </div>

        </div>
      </div>
      {popUpRegister && <Register tatPopup={() => tatPopUpRegister}></Register>}
    </div>
  );
}
