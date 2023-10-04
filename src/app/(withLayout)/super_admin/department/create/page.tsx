'use client'

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.services";

const CreateDepartment = () => {
    const { role } = getUserInfo() as any
    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` },
                    { label: `department`, link: `/${role}/department` }
                ]
            } />
            <h1>create department page</h1>
        </div>
    );
};

export default CreateDepartment;