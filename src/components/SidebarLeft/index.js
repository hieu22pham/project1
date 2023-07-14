import { Menu } from "antd";
import {
  PlayCircleOutlined,
  CheckOutlined,
  HighlightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {
  const items = [
    {
      label: "Menu 1",
      icon: <PlayCircleOutlined />,
      key: "menu-1",
      children: [
        {
          label: <Link to="/">Trang chủ</Link>,
          key: "/",
        },
        {
          label: <Link to="/">Sản phẩm</Link>,
          key: "menu-1-2",
        },
        {
          label: <Link to="/">Cửa hàng</Link>,
          key: "menu-1-3",
        }
      ]
    },
    {
      label: "Menu 2",
      icon: <CheckOutlined />,
      key: "menu-2",
      children: [
        {
          label: <Link to="/">Dashboard</Link>,
          key: "menu-2-1",
        },
        {
          label: <Link to="/">Dashboard</Link>,
          key: "menu-2-2",
        },
        {
          label: <Link to="/">Dashboard</Link>,
          key: "menu-2-3",
        }
      ]
    },
    {
      label: "Menu 3",
      icon: <HighlightOutlined />,
      key: "menu-3",
    }, {
      label: <Link to="/create-room">Tạo phòng</Link>,
      icon: <HighlightOutlined />,
      key: "/create-room",
    },
    {
      label: <Link to="/book-room">Đặt phòng</Link>,
      icon: <HighlightOutlined />,
      key: "/book-room",
    }, {
      label: <Link to="/list-room">Danh sách phòng</Link>,
      icon: <HighlightOutlined />,
      key: "/list-room",
    },
  ];

  return (
    <>
      <div className="sidebar-left" >
        <Menu theme="light" mode="inline" items={items} defaultSelectedKeys={["/"]} defaultOpenKeys={["menu-1"]} />
      </div>
    </>
  );
}

export default MenuSider;
