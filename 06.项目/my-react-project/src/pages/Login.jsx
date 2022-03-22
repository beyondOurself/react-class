import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Input, Button, message } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { LoginApi } from "../request/api"

import logo from "../assest/logo.png"
export default function Login() {
  const navigate = useNavigate()
  const onFinish = (values) => {
    LoginApi({
      username: values.username,
      password: values.password,
    }).then((res) => {
      if (res.errCode === 0) {
        message.success(res.message)
        // avatar: "default_avatar.jpg"
        // cms-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxvbmczIiwicGFzc3dvcmQiOiJsb25nMyIsImlhdCI6MTY0NzYyNzczNywiZXhwIjoxNjQ3NjMxMzM3fQ.IsaLnr0SDuEKHh3RchUpk04n8RLuuEvvqvzxv12IpJE"
        // editable: 1
        // player: "normal"
        // username: "long3"
        
        localStorage.setItem("avatar", res.data.avatar)
        localStorage.setItem("cms-token", res.data["cms-token"])
        localStorage.setItem("editable", res.data.editable)
        localStorage.setItem("player", res.data.player)
        localStorage.setItem("username", res.data.username)

        // 跳到根目录
        setTimeout(() => {
          navigate('/')
        }, 1500);

      } else {
        message.error(res.message)
      }
    })
  }

  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }
  return (
    <div className="login_body">
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

        <div className="link_wrap">
          <Link to="/register">没有账号 ？前往注册</Link>
        </div>

        <Form.Item>
          <Button block size="large" type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
