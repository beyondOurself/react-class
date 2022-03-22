import React from "react"
import { Link ,useNavigate } from "react-router-dom"
import { Form, Input, Button,message } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { RegsiterApi } from "../request/api"
import logo from "../assest/logo.png"
export default function Register() {
  const navigate = useNavigate()
  const onFinish = ({ username = '', password = '' }) => {
    RegsiterApi(
      {
        username,
        password
      }
    ).then( res => {
      if (res.errCode === 0) {
        message.success(res.message)
        setTimeout(() => navigate("/login"), 1500)
       
      } else {
        message.error(res.message)
      }
    })
    
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  return (
    <div className="register_body">
      <div className="logo_wrap">
        <img src={logo} alt="logo" />
      </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "用户名不能为空" }]}
        >
          <Input
            size="large"
            placeholder="请输入姓名"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "密码不能为空" }]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "密码不能为空",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error("请再次输入密码"))
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="请输入密码"
          />
        </Form.Item>

        <div className='link_wrap'>
          <Link to="/login">已有账号 ？前往登录</Link>
        </div>

        <Form.Item>
          <Button block size="large" type="primary" htmlType="submit">
            立即注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
