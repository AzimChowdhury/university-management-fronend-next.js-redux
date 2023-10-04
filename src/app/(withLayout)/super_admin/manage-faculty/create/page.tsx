'use client'

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.services";

const CreateFaculty = () => {
    const { role } = getUserInfo() as any
    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` },
                    { label: `manage-faculty`, link: `/${role}/manage-faculty` }
                ]
            } />
            <h1> create faculty</h1>
        </div>
    );
};

export default CreateFaculty;