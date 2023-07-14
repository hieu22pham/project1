import { Layout } from "antd";
import LearnGrid from "../LearnGrid";
import "./LayoutDefault.css"
import logo from "../../image/logo.png"
import logoFold from "../../image/logoFold.png"
import { SearchOutlined, BarsOutlined } from '@ant-design/icons';
import { useState } from "react";
import Notify from "../Notify";
import SidebarLeft from "../SidebarLeft";
import { Outlet } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

function LayoutDefault() {
    const [collapse, setCollapse] = useState(false);

    const clickCollapse = (e) => {
        setCollapse(!collapse);
    }
    return (
        <>
            <Layout className="layout-default">
                <header className="header">
                    <div className={"header__logo " + (collapse && "header__logo--collapse")}>
                        <img src={collapse ? logoFold : logo} />
                    </div>
                    <div className="header__nav">
                        <div className="header__nav--left">
                            <div className="header__collapse">
                            </div>
                            <div className="header__barsOutlined" onClick={clickCollapse}>
                                <BarsOutlined />
                            </div>
                            <div className="header__search">
                                <SearchOutlined />
                            </div>


                        </div>
                        <div className="header__nav--right">
                            <Notify />
                        </div>

                    </div>
                </header>
                <Layout className="layout-default">
                    <Sider className="sider-default" collapsed={collapse}>
                        <SidebarLeft />
                    </Sider>
                    <Content className="content">
                        <Outlet />
                    </Content>
                </Layout>

            </Layout>
        </>
    )
}

export default LayoutDefault;