'use client'
import FormDatePicker from '@/components/forms/FormDatePicker';
import FormInput from '@/components/forms/FormInput';
import FormTextArea from '@/components/forms/FormTextArea';
import Form from '@/components/forms/From';
import FormSelectField from '@/components/forms/FromSelectField';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import UploadImage from '@/components/ui/uploadImage';
import { BloodGroups, departmentOptions, genderOption } from '@/constants/global';
import { getUserInfo } from '@/services/auth.services';
import { Button, Col, Row } from 'antd';
import React from 'react';

const CreateAdmin = () => {
    const { role } = getUserInfo() as any
    const onSubmit = async (data: any) => {
        try {
            console.log(data);
        } catch (err) {
            console.error(err)
        }
    };
    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` },
                    { label: `admin`, link: `/${role}/admin` }
                ]
            } />


            <h1>Create Admin</h1>

            <div>
                <Form submitHandler={onSubmit}>
                    <div style={{
                        border: '1px solid #d9d9d9',
                        borderRadius: '5px',
                        padding: '15px',
                        marginBottom: '10px'
                    }}>
                        <p style={{ fontSize: "18px", marginBottom: "10px", fontWeight: '600' }}>Admin Information</p>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormInput type='text' name='admin.name.firstName' size='large' label='First Name' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormInput type='text' name='admin.name.middleName' size='large' label='Middle Name' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormInput type='text' name='admin.name.LastName' size='large' label='Last Name' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormInput type='password' name='password' size='large' label='Password' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormSelectField size='large' name='admin.gender' options={genderOption} label='Gender' placeholder='select' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormSelectField size='large' name='admin.managementDepartment' options={departmentOptions} label='Department' placeholder='select' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <UploadImage />
                            </Col>




                        </Row>

                    </div>
                    {/*  basic info */}
                    <div style={{
                        border: '1px solid #d9d9d9',
                        borderRadius: '5px',
                        padding: '15px',
                        marginBottom: '10px'
                    }}>
                        <p style={{ fontSize: "18px", marginBottom: "10px", fontWeight: '600' }}>Basic Information</p>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormInput type='email' name='admin.email' size='large' label='Email' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormInput type='text' name='admin.contactNo' size='large' label='Contact No' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormInput type='text' name='admin.emergencyContactNo' size='large' label='Emergency Contact Number' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormDatePicker name='admin.dateOfBirth' label='Date of Birth' size='large' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormSelectField size='large' name='admin.bloodGroup' options={BloodGroups} label='Blood Group' placeholder='select' />
                            </Col>
                            <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                                <FormInput type='text' name='admin.designation' size='large' label='Designation' />
                            </Col>

                            <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
                                <FormTextArea name='admin.presentAddress' label='Present Address' rows={4} />
                            </Col>
                            <Col className="gutter-row" span={12} style={{ marginBottom: "10px" }}>
                                <FormTextArea name='admin.permanentAddress' label='Permanent Address' rows={4} />
                            </Col>




                        </Row>

                    </div>
                    <Button htmlType='submit' type='primary'>Create</Button>
                </Form>
            </div>

        </div>
    );
};

export default CreateAdmin;