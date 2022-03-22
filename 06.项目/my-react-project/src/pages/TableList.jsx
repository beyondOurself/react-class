import React, { useState,useEffect}from 'react'
import { Table, Tag, Space, Button } from "antd"
import { Link ,useNavigate ,useParams} from 'react-router-dom'
import {ArticleApi} from '../request/api'
import dayjs from 'dayjs'



function CustomTitle(props) {

  return (
    <div>
      <a
        rel="noreferrer"
        href={"http://codesohigh.com:8765/article/" + props.id}
        target="_blank"
      >
        <h1 className="title_headline">{props.title}</h1>
      </a>
      <span className="title__container">{props.subTitle}</span>
    </div>
  )
       
  }

export default function TableList() {
  const [arr, setArr] = useState([])
  const [navigation, setNavigation] = useState({
    current: 1, 
    pageSize: 10,
    total:0
  })
  const navigate = useNavigate()
  

  const tableChange = ({ current,pageSize } = {}) => {
    getArticleList(current, pageSize)
  }
  
  const getArticleList = (current,pageSize) => {
    ArticleApi({
      num: current,
      count: pageSize,
    }).then(
      ({
        errCode = "",
        data: { arr = [], count = 10, num = 1, total = 10 } = [],
      }) => {
        if (errCode === 0) {
          const newArr = JSON.parse(JSON.stringify(arr))
          setNavigation({
            pageSize: count,
            current: num,
            total,
          })
          const rebuildArr = newArr.map((item) => {
            item.date = dayjs(item.date).format("YYYY-MM-DD hh:mm:ss")
            item.key = item.id
            item.customTitle = (
              <CustomTitle
                id={item.id}
                title={item.title}
                subTitle={item.subTitle}
              />
            )
            return item
          })

          setArr(rebuildArr)
        }
      }
    )
  }

  useEffect(() => {
    getArticleList(navigation)
  }, [])

  
  
  const columns = [
    {
      width: "60%",
      dataIndex: "customTitle",
      key: "customTitle",
      render: (text) => <div>{text}</div>,
    },
    {
      dataIndex: "date",
      key: "date",
    },
    {
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              navigate("/edit/" + text.key)
            }}
          >
            编辑
          </Button>
          <Button
            type="danger"
            onClick={() => {
              console.log(text.key)
            }}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <div className="table_page">
      <Table
        showHeader={false}
        columns={columns}
        dataSource={arr}
        onChange={tableChange}
        navigation={navigation}
      />
    </div>
  )
}




