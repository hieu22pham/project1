import "./BookroomStyle.css"
import { Input, Button, Checkbox, Space, Alert } from "antd";
import { Row, Col } from "antd";
import { useState } from "react";
import { mess } from "./mess";

function Bookroom() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false)


	const handleSubmit = (e) => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}

	const handleChangeInput = (e) => {
		const object = {
			...data,
			[e.target.name]: e.target.value
		};

		setData(object);
	}

	const handleChangCheckbox = (e) => {
		const object = {
			...data,
			services: e
		}
		setData(object)
	}

	return (
		<>
			<div className="Book-room">
				<h2>Đặt phòng</h2>
				<Row gutter={[20, 20]}>
					<Col xxl={24} xl={24} lg={2} md={6} sm={10} xs={12}>
						<p>Họ tên</p>
						<Input name="fullName" placeholder="Nhập họ tên..." onChange={handleChangeInput} />
					</Col>
					<Col xxl={12} xl={12} lg={2} md={6} sm={10} xs={12}>
						<p>Số điện thoại</p>
						<Input name="numberPhone" placeholder="Nhập số điện thoại..." onChange={handleChangeInput} />
					</Col>
					<Col xxl={12} xl={12} lg={2} md={6} sm={10} xs={12}>
						<p>Email</p>
						<Input name="Email" placeholder="Nhập email..." onChange={handleChangeInput} />
					</Col>

					<Checkbox.Group onChange={handleChangCheckbox}>
						<Space direction="vertical">
							<Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
							<Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
							<Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
							<Checkbox value="Thuê ô tô 9 chỗ">Thuê ô tô 9 chỗ</Checkbox>
							<Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
						</Space>
					</Checkbox.Group>

					<Col span={24}>
						<Button type="primary"
							onClick={handleSubmit} loading={loading}>Đặt phòng
						</Button>

					</Col>


					<Col span="6">
						{loading &&
							<Space
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
						}
					</Col>
				</Row>
			</div>

		</>
	)
}

export default Bookroom;