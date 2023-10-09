"use client"
import FormInput from '@/components/forms/FormInput';
import Form from '@/components/forms/From';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import ActionBar from '@/components/ui/actionBar';
import { useGetSingleDepartmentQuery, useUpdateDepartmentMutation } from '@/redux/api/departmentApi';
import { getUserInfo } from '@/services/auth.services';
import { Button, Col, Row, message } from 'antd';
import React from 'react';

const EditDepartment = ({ params }: { params: any }) => {
    const { id } = params;
    const { data } = useGetSingleDepartmentQuery(id)
    const [updateDepartment] = useUpdateDepartmentMutation()
    const defaultValue = {
        title: data?.title || ''
    }
    const onSubmit = async (values: { title: string }) => {
        message.loading('updating . . .')
        try {
            // console.log({ id, body: values });
            await updateDepartment({ id, body: values })
            message.success('Department updated successfully')
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message)
        }
    };


    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `super_admin`, link: `/super_admin` },
                    { label: `department`, link: `/super_admin/department` },
                ]
            } />

            <ActionBar title='Update Department'></ActionBar>
            <Form submitHandler={onSubmit} defaultValues={defaultValue}>
                <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                    <Col span={8} style={{ margin: "10px 0" }}>
                        <FormInput name="title" label="Title" />
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit">
                    update
                </Button>
            </Form>
        </div>
    );
};

export default EditDepartment;