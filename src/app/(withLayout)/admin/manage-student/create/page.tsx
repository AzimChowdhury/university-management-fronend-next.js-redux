'use client'

import StepperForm from "@/components/StepperForm/StepperFrom";
import BasicInformation from "@/components/StudentsForms/BasicInformation";
import GuardianInfo from "@/components/StudentsForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentsForms/LocalGuardianInfo";
import StudentInfo from "@/components/StudentsForms/StudentInfo";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.services";

const CreateStudent = () => {


    const steps = [
        {
            title: 'Student Information',
            content: <StudentInfo />,
        },
        {
            title: 'Basic Information',
            content: <BasicInformation />,
        },
        {
            title: 'Guardian Information',
            content: <GuardianInfo />,
        },
        {
            title: 'Local Guardian Information',
            content: <LocalGuardianInfo />,
        },
    ];
    const handleStudentSubmit = async (data: any) => {
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

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
            <StepperForm submitHandler={(value) => handleStudentSubmit(value)} steps={steps} />
        </div>
    );
};

export default CreateStudent;