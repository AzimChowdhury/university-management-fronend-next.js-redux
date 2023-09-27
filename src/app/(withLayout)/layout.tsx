import Sidebar from '@/components/ui/sidebar';
import { Layout } from 'antd'
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    return <Layout hasSider>
        <Sidebar />
        {children}
    </Layout>
};

export default DashboardLayout;