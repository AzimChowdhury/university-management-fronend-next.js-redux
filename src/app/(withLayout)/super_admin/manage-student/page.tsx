'use client'
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.services';
import React from 'react';

const ManageStudent = () => {
    const { role } = getUserInfo() as any
    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` }
                ]
            } />
            <h1>manage student</h1>
        </div>
    );
};

export default ManageStudent;