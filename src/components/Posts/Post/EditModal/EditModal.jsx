import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./EditModal.scss";
import { Button, Modal, Form, Input } from "antd";
import { updatePost } from "../../../../features/posts/postsSlice";
import { useEffect } from "react";

const EditModal = ({ visible, setVisible }) => {
  const { post } = useSelector((state) => state.posts);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const postWithId = { ...values, _id: post._id };
    dispatch(updatePost(postWithId));
    setVisible(false);
  };

  useEffect(() => {
    console.log(post)
    form.setFieldsValue(post);
  }, [post]);

  return (
    <Modal forceRender title="Edit Post" visible={visible} footer={[]}>
    
     <Form className="form-container"  onFinish={onFinish} form={form}>
        <Form.Item label="Post Name" name="name">
          <Input placeholder="Post name" />
        </Form.Item>

        <Form.Item label="Body">
          <Form.Item name="body">
            <Input placeholder="body" />
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
