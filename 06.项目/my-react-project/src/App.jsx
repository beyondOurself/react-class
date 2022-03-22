import "./assest/base.less"
import './less/index.less'
import React,{useEffect, useState} from "react"
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import  Header from './components/Header'
import Sider from './components/Sider'
import Bread from './components/Bread'
const { Footer, Content } = Layout


export default function App() {
  
  return (
    <>
      <div>
        <Layout className="layout_body">
          <Header></Header>
          <Layout>
            <Sider></Sider>
            <Content className="content_body">
              <div className="bread_wrap">
                <Bread></Bread>
              </div>
              <div className="outlet_wrap">
                <div className="outlet_box">
                  <Outlet></Outlet>
                </div>
              </div>
            </Content>
          </Layout>
          <Footer className="footer_body">
            Respect | Copryright &copy; 2022 Author 愚蠢的地球人
          </Footer>
        </Layout>
      </div>
    </>
  )
}
