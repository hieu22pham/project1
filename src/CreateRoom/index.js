import { Form, Input, Button, InputNumber, Select, Row, Col, Switch, Space, Alert } from "antd";
import "./crtRoom.css"
import { createRoom } from "../components/services/roomsService";
import { useState } from "react";

function CreateRoom() {
	const Option = Select;
	const [form] = Form.useForm();

	const [loading, SetLoading] = useState(false);
	const handleSubmit = async (values) => {
		SetLoading(true);
		const respone = await createRoom(values);
		if (respone) {
			SetLoading(false);
			form.resetFields();
		}
	}

	const onChange = (checked) => {
	};

	return (
		<>
			<div className="createRoom">
				<h2>Thêm phòng mới</h2>
				<Row>
					<Form name="create-room" layout="vertical" form={form} onFinish={handleSubmit}
						style={{ width: 1200 }}>

						<Col xxl={12} xl={5} lg={24} md={24} sm={24} xs={24}>
							<Form.Item
								label="Tên phòng:"
								name="nameRoom"
								rules={[{ required: true, message: 'Bắt buộc!' }]}
							>
								<Input />
							</Form.Item>
						</Col>
						<Form.Item
							label="Số lượng giường:"
							name="quantityBed"
							rules={[{ required: true, message: 'Bắt buộc!' }]}
						>
							<InputNumber min={1} max={5} />
						</Form.Item>
						<Form.Item
							label="Số người tối đa:"
							name="maxPeople"
							rules={[{ required: true, message: 'Bắt buộc!' }]}
						>
							<InputNumber min={1} max={10} />
						</Form.Item>
						<Col xxl={12} xl={8} lg={8} md={12} sm={12} xs={12}>
							<Form.Item
								label="Mô tả:"
								name="Decription"
							// rules={[{ required: true, message: 'Bắt buộc!' }]}
							>
								<Input.TextArea />
							</Form.Item>
						</Col>

						<Col xxl={12} xl={8} lg={24} md={24} sm={24} xs={24}>
							<Form.Item
								label="Tiện ích:"
								name="feature"
							// rules={[{ required: true, message: 'Bắt buộc!' }]}
							>
								<Select style={{
									width: "100%"
								}}
									mode="multiple"
									allowClear
								>
									<Option value="Wifi">Wifi</Option>
									<Option value="Nóng lạnh">Nóng lạnh</Option>
									<Option value="Điều hòa">Điều hòa</Option>

								</Select >
							</Form.Item>
						</Col>

						<Form.Item
							valuePropName="checked" label="Trạng thái" name="status"
						>
							<Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng"/>
						</Form.Item>
						<Form.Item
							valuePropName="checked" label="Loại phòng" name="service"
						>
							<Switch checkedChildren="VIP" unCheckedChildren="Thường"/>
						</Form.Item>



						<Form.Item >
							<Button type="primary" htmlType="submit" loading={loading}>
								Tạo mới
							</Button>
						</Form.Item>

						<Col span="6">

							{/* ({loading} && <Space
								direction="vertical"
								style={{
									position: 'fixed',
									top: 78,
									right: 80,
									border: "1px solid orangered "
									// border: '1px solid black',
								}}
							>
								 <Alert
									message="Đặt phòng thành công!"
									type="success"
									showIcon
									banner
									closable
								/>
							</Space>
							) */}

						</Col>
					</Form>
				</Row>

			</div>
		</>
	)
}

export default CreateRoom;