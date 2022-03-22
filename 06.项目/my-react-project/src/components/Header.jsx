import React,{useState,useEffect} from "react"
import { Layout, Menu, Dropdown, message } from "antd"
import { useNavigate } from 'react-router-dom'
import { DownOutlined } from "@ant-design/icons"
import logo from "../assest/logo.png"
import avatarDefault from '../assest/th.jpg'
const { Header } = Layout

export default function HeaderCom() {
    const [avatar, setAvatar] = useState(avatarDefault)
    const [username, setUsername] = useState('游客')

    const navigate = useNavigate()
    useEffect(() => {
        const selfUsername = localStorage.getItem('username')
        const selfAvatar = localStorage.getItem('avatar')

        if (selfUsername) {
            setUsername(selfUsername)
        }
        if (selfAvatar) {
            setAvatar('http://47.93.114.103:6688/'+selfAvatar)
        }
    }, [])
    
    // 退出登录 
    const outlogin = () => {
        // 清除token 
        localStorage.clear()
        message.success('退出成功,正在前往登录页')
        setTimeout(() => {
        navigate("/login")
            
        }, 1500);

    }
  const menu = (
    <Menu>
      <Menu.Item key={1}>修改资料</Menu.Item>
      <Menu.Item key={2} onClick={outlogin}>
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <Header className="header_body">
      <div className="header_wrap">
        <div className="header_left">
          <img width="200px" src={logo} alt="" />
        </div>
        <div className="header_right">
          <div>
            <Dropdown overlay={menu} className='dropdown_body'>
              <a
                className="ant-dropdown-link_body"
                onClick={(e) => e.preventDefault()}
              >
                <img src={avatar} alt="" className="avatar_body"></img>
                <span>{username}</span> <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  )
}
