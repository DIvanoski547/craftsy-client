import productService from "../services/Product.service";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
  Card,
} from "antd";

const { Option } = Select;

function AddProduct(props) {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const imageFile = values.imageUrl && values.imageUrl[0] ? values.imageUrl[0].originFileObj : null;

    if (!imageFile) {
      message.error("Image is required!");
      return;
    }

    const requestBody = new FormData();
    requestBody.append("title", values.title);
    requestBody.append("description", values.description);
    requestBody.append("price", values.price);
    requestBody.append("category", values.category);
    requestBody.append("imageUrl", imageFile);

    productService
      .createProduct(requestBody)
      .then(() => {
        form.resetFields();
        props.refreshProducts();
        message.success("Product added successfully!");
      })
      .catch((err) => {
        console.log(err);
        message.error("Failed to add product. Please try again.");
      });
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <Card>
        <h3>Add Product</h3>
        <Form
          form={form}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onFinish={handleSubmit}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input the price!" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              formatter={(value) => `$ ${value}`}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select placeholder="Select a category">
              <Option value="household">Household</Option>
              <Option value="kitchen">Kitchen</Option>
              <Option value="car">Car</Option>
              <Option value="personal">Personal</Option>
              <Option value="engraved">Engraved</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Upload"
            name="imageUrl"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: "Please upload an image!" }]}
          >
            <Upload
              name="imageUrl"
              listType="picture-card"
              beforeUpload={() => false}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 14,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default AddProduct;
