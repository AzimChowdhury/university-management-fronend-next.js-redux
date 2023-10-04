'use client'

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.services";

const CreateStudent = () => {
    const { role } = getUserInfo() as any
    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` },
                    { label: `manage-student`, link: `/${role}/manage-student` }
                ]
            } />
            <h1>create student</h1>
        </div>
    );
};

export default CreateStudent;