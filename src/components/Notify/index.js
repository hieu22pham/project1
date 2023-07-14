import { Dropdown, Button } from "antd";
import { BellOutlined } from '@ant-design/icons';
import "./Notify.css"

function Notify() {
    const items = [
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
            key: '1',
        }, {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    3nd menu item
                </a>
            ),
            key: '3'
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    4nd menu item
                </a>
            ),
            key: '4'
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    5nd menu item
                </a>
            ),
            key: '5'
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    6nd menu item
                </a>
            ),
            key: '6'
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    7nd menu item
                </a>
            ),
            key: '7'
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    8nd menu item
                </a>
            ),
            key: '8'
        },
    ];

    return (
        <>
            <Dropdown
                menu={{
                    items
                }}
                trigger={['click']}
                dropdownRender={(menu) => (
                    <>
                        <div className="notify__dropDown">
                            <div className="notify__header">
                                <div className="notify__header-title">
                                    <BellOutlined /> Notification
                                </div>
                                <Button type="link">View all</Button>
                            </div>
                            <div className="notify__body">
                                {menu}
                            </div>
                        </div>
                    </>)}
            >
                <Button type="text" icon={<BellOutlined />}></Button>
            </Dropdown>
        </>
    )
}

export default Notify;