'use client'

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.services";
import { Button } from 'antd';
import Link from 'next/link';

const ManageAdmin = () => {
    const { role } = getUserInfo() as any
    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` },
                ]
            } />
            <h1>admin page</h1>
            <Link href='/super_admin/admin/create'><Button type='primary'>Create Admin</Button></Link>
        </div>
    );
};

export default ManageAdmin;