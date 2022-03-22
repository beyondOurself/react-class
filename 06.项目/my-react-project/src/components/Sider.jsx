import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Layout, Menu } from "antd"
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons"
const { Sider } = Layout

export default function SiderCom() {
  const [defKey, setDefKey] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  // 模拟 componentDidMounted
  useEffect(() => {
    const path = location.pathname
    const key = path.split("/")[1]
    setDefKey(key)
  }, [location.pathname])

  const handleClick = (e) => {
    navigate("/" + e.key)
    setDefKey(e.key)
  }
  return (
    <Sider>
      <div style={{ width: 200 }}>
        <Menu
          onClick={handleClick}
          defaultSelectedKeys={["list"]}
          selectedKeys={[defKey]}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="list" icon={<PieChartOutlined />}>
            查看文章列表
          </Menu.Item>
          <Menu.Item key="edit" icon={<DesktopOutlined />}>
            文章编辑
          </Menu.Item>
          <Menu.Item key="means" icon={<ContainerOutlined />}>
            修改资料
          </Menu.Item>
          <Menu.Item key="listlist" icon={<ContainerOutlined />}>
            list表格
          </Menu.Item>
          <Menu.Item key="tablelist" icon={<ContainerOutlined />}>
            table表格
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  )
}
