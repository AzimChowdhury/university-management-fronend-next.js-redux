'use client'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.services';
import React from 'react';

const CreateAdmin = () => {
    const { role } = getUserInfo() as any
    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` },
                    { label: `admin`, link: `/${role}/admin` }
                ]
            } />
            <h1>create admin page</h1>
        </div>
    );
};

export default CreateAdmin;