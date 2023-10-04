"use client"
import { Layout } from 'antd'
import UMBreadCrumb from './UMBreadCrumb';
import Header from './Header';
const { Content } = Layout

const Contents = ({ children }: { children: React.ReactNode }) => {
    return (
        <Content style={{ minHeight: "100vh" }}>
            <Header />

            {children}
        </Content>
    );
};

export default Contents;