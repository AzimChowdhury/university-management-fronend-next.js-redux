'use client'

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.services";
import { Button } from 'antd';
import Link from 'next/link';

const Department = () => {
    const { role } = getUserInfo() as any
    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` },
                ]
            } />
            <h1>department page</h1>
            <Link href='/super_admin/department/create'><Button type='primary'>Create Department</Button></Link>
        </div>
    );
};

export default Department;