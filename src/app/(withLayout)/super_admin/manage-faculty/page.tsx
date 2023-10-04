'use client'
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.services";
import { Button } from 'antd';
import Link from 'next/link';

const ManageFaculty = () => {
    const { role } = getUserInfo() as any
    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` }
                ]
            } />
            <h1>manage faculty</h1>
            <Link href='/super_admin/manage-faculty/create'><Button type='primary'>Create Faculty</Button></Link>
        </div>
    );
};

export default ManageFaculty;