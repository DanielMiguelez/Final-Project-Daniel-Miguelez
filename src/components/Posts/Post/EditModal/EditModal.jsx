import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./EditModal.scss";

import { Button, Modal, Form, Select, Input } from "antd";
import { updatePost } from "../../../../features/posts/postSlice";

const EditModal = ({ visible, setVisible }) => {
  const { Option } = Select;
  const { post, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const selectOption = posts.map((post) => {
    return (
      <Option key={post._id} value={post._id}>
        {post.name} {post.body}
      </Option>
    );
  });

  const onFinish = (values) => {
    const postWithId = { ...values, id: post.id };
    dispatch(updatePost(postWithId));
    setVisible(false);
  };
  return (
  
    <Modal className="formodal" title="Edit Post" visible={visible} footer={[]}>
      <Form onFinish={onFinish}>
        <Form.Item label="Post Name" name="name">
          <Input placeholder="Post name" />
        </Form.Item>
  
        <Form.Item label="Body">
          <Form.Item name="body" noStyle>
            <Input placeholder="body" />
          </Form.Item>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" width="100px">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  
  );
};


export default EditModal;
