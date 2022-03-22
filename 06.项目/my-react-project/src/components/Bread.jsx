import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from "antd"
import { HomeOutlined, UserOutlined } from "@ant-design/icons"


export default function Bread() {
  const [breadName, setBreadName] = useState("列表")
  const { pathname } = useLocation()
  useEffect(() => {
    //   setBreadName(pathname)

      switch (pathname) {
          case '/list':
              setBreadName('列表')
          break
          case '/edit':
              setBreadName("编辑")
              
          break
          case '/means':
              setBreadName("修改资料")
              
          break
        
        default:
          if (pathname.includes('edit')) {
             setBreadName("编辑")
          }
          break
      }

  }, [pathname])
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="pathName">{breadName}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
