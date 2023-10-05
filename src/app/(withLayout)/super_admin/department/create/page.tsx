"use client";

import FormInput from "@/components/forms/FormInput";
import Form from "@/components/forms/From";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

const CreateDepartment = () => {
    const [addDepartment] = useAddDepartmentMutation()
    const onSubmit = async (data: any) => {
        message.loading('creating . . .')
        try {
            await addDepartment(data)
            message.success('Department added successfully')
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message)
        }
    };
    const base = "super_admin";
    return (
        <div>
            <UMBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "department", link: `/${base}/department` },
                ]}
            />
            <h1>Create Department</h1>
            <Form submitHandler={onSubmit}>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <FormInput name="title" label="Title" />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    add
                </Button>
            </Form>
        </div>
    );
};

export default CreateDepartment 