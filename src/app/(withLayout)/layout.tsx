'use client'
import Contents from '@/components/ui/contents';
import Sidebar from '@/components/ui/sidebar';
import { isLoggedIn } from '@/services/auth.services';
import { Layout } from 'antd'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const userLoggedIn = isLoggedIn()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        if (!userLoggedIn) {
            router.push('/login')
        }
        setIsLoading(true)
    }, [router, isLoading])

    // if (!isLoading) {
    //     return <p>Loading . . . </p>
    // }
    return <Layout hasSider>
        <Sidebar />
        <Contents>{children}</Contents>
    </Layout>
};

export default DashboardLayout;