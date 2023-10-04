import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getUserInfo, removeUserInfo } from '@/services/auth.services';
import { authKey } from '@/constants/storageKey';
import { useRouter } from 'next/navigation';
const { Header: AntHeader } = Layout;

const Header = () => {
    const router = useRouter()
    const { role } = getUserInfo()
    const logout = () => {
        removeUserInfo(authKey)
        router.push('/login')
    }
    const items: MenuProps['items'] = [
        {
            key: '0',
            label: <Button onClick={logout} type='text' danger>Logout</Button>
        }
    ]

    return (
        <AntHeader style={{ backgroundColor: '#c9c9c9' }}>
            <Row justify='end' align='middle' style={{ height: "100%" }}>
                <p style={{ marginRight: '20px' }}>{role}</p>
                <Dropdown menu={{ items }}>
                    <a >
                        <Space wrap size={16}>

                            <Avatar size="large" icon={<UserOutlined />} />
                        </Space>
                    </a>
                </Dropdown>
            </Row>
        </AntHeader>
    );
};

export default Header;