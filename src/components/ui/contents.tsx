"use client"
import { Layout } from 'antd'
import UMBreadCrumb from './UMBreadCrumb';
import Header from './Header';
import dynamic from 'next/dynamic';
const { Content } = Layout

const Contents = ({ children }: { children: React.ReactNode }) => {
    return (
        <Content style={{ minHeight: "100vh" }}>
            <Header />

            <div style={{ padding: '15px' }}> {children}</div>
        </Content>
    );
};

export default dynamic(() => Promise.resolve(Contents), { ssr: false })