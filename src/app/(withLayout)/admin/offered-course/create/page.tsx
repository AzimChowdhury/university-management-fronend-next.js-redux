"use client";

import ACDepartmentField from "@/components/forms/ACDepartmentField";
import Form from "@/components/forms/From";
import FormSelectField, { SelectOptions } from "@/components/forms/FromSelectField";
import OfferedCoursesField from "@/components/forms/OfferedCourseField";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddOfferedCourseMutation } from "@/redux/api/offeredCourseApi";
import { useSemesterRegistrationsQuery } from "@/redux/api/semesterRegistrationApi";
import { Button, Col, Row, message } from "antd";

const CreateOfferedCoursePage = () => {
    const [addOfferedCourse] = useAddOfferedCourseMutation();

    const { data, isLoading } = useSemesterRegistrationsQuery({
        limit: 10,
        page: 1,
    });

    const semesterRegistrations = data?.semesterRegistrations;
    const semesterRegistrationsOptions = semesterRegistrations?.map(
        (semester) => {
            return {
                label: semester?.academicSemester?.title,
                value: semester?.id,
            };
        }
    );

    const onSubmit = async (data: any) => {
        message.loading("Creating.....");
        try {
            const res = await addOfferedCourse(data).unwrap();
            console.log(res);
            if (res.length >= 0) {
                message.success("Offered Course created successfully");
            } else {
                message.error('failed to create offered course ')
            }
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message);
        }
    };
    const base = "admin";
    return (
        <div>
            <UMBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "offered-course", link: `/${base}/offered-course` },
                ]}
            />
            <h1>Create Offered Course</h1>
            <Form submitHandler={onSubmit}>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <div style={{ margin: "10px 0px" }}>
                            <FormSelectField
                                options={semesterRegistrationsOptions as SelectOptions[]}
                                name="semesterRegistrationId"
                                label="Semester registration"
                            />
                        </div>

                        <div style={{ margin: "10px 0px" }}>
                            <OfferedCoursesField name="courseIds" label="Courses" />
                        </div>

                        <div style={{ margin: "10px 0px" }}>
                            <ACDepartmentField
                                name="academicDepartmentId"
                                label="Academic department"
                            />
                        </div>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    add
                </Button>
            </Form>
        </div>
    );
};

export default CreateOfferedCoursePage;