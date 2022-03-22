import React, { useEffect, useState } from "react"
import { PageHeader, Button, Modal, Form, Input } from "antd"
import { useParams,useLocation } from "react-router-dom"
import { ArticelUpdateApi, ArticelSeachApi } from "../request/api"
import dayjs from "dayjs"
import E from "wangeditor"
let editor = null

export default function Edit() {
  const [content, setContent] = useState("")
  const [confirmLoading, setConfimLoading] = useState(false)
  const [title,setTitle] = useState('')
  const [subTitle,setSubTitle] = useState('')
  const params = useParams()
  const location = useLocation()
  let formRef = React.createRef()
  // 富文本标签
  useEffect(() => {
    editor = new E("#editor_container")
    editor.create()
    editor.config.onchange = (newHtml) => {
      setContent(newHtml)
    }

    // 获取文章信息
    if (params.id) {
      ArticelSeachApi({
        id: params.id,
      }).then(
        ({
          errCode,
          message,
          data: { content, subTitle, title } = {},
        } = {}) => {
          if (errCode === 0) {
            setTitle(title)
            setSubTitle(subTitle)
            editor.txt.html(content)
          }
        }
      )
    }

    return () => {
      editor.destroy()
      editor = null
    }
  }, [location.pathname])

  // 获取 html 方法1
  function getHtml() {
    console(content)
  }

  // 获取 html 方法2
  function getHtml1() {
    console.log(editor.txt.html())
  }

  // 获取text
  function getText() {
    console.log(editor.txt.text())
  }

  const [isModalVisible, setIsModalVisible] = useState(false)

  //模态框 start

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const { title, subTitle } = values
        setConfimLoading(true)
        ArticelUpdateApi({
          title,
          subTitle,
          content,
          id:params.id
        }).then((res) => {
          form.resetFields()
          setContent("")
          editor.txt.clear()
          setConfimLoading(false)
          setIsModalVisible(false)
          navigator('/tablelist')
        })
      })
      .catch((info) => {
        console.log("Validate Failed:", info)
      })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  //模态框 end

  // 表单 start
  const [form] = Form.useForm()
  //验证成功
  // 表单 end

  return (
    <div className="edit-page_body">
      <div>
        <PageHeader
          className="site-page-header"
          onBack={
            params.id
              ? () => {
                  console.log(params.id)
                }
              : null
          }
          title="文章编辑"
          subTitle={dayjs().format("YYYY-MM-DD hh:mm:ss")}
          extra={[
            <Button
              key="3"
              type="primary"
              onClick={() => setIsModalVisible(true)}
            >
              提交文章
            </Button>,
          ]}
        />
      </div>
      <div id="editor_container"></div>
      <div className="modal_wrap">
        <Modal
          title="编辑"
          okText="提交"
          cancelText="取消"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          confirmLoading={confirmLoading}
          zIndex={99999}
        >
          <Form
            ref={formRef}
            form={form}
            name="basic"
            initialValues={{ title, subTitle }}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            autoComplete="off"
          >
            <Form.Item
              label="标题"
              name="title"
              rules={[{ required: true, message: "请输入标题!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="子标题"
              name="subTitle"
              rules={[{ required: true, message: "请输入子标题!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  )
}
