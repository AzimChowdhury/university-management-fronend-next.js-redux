'use client'
import { Col, Row } from 'antd';
import React from 'react';
import FormInput from '../forms/FormInput';
import FormSelectField from '../forms/FromSelectField';
import UploadImage from '../ui/uploadImage';
import { adOptions, asOptions, departmentOptions, facultyOptions, genderOption } from '@/constants/global';

const StudentInfo = () => {
    return (
        <div style={{
            border: '1px solid #d9d9d9',
            borderRadius: '5px',
            padding: '15px',
        }}>
            <p style={{ fontSize: "18px", marginBottom: "10px", fontWeight: '600' }}>Student Information</p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
                    <FormInput type='text' name='student.name.firstName' size='large' label='First Name' />
                </Col>
                <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
                    <FormInput type='text' name='student.name.middleName' size='large' label='Middle Name' />
                </Col>
                <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
                    <FormInput type='text' name='student.name.LastName' size='large' label='Last Name' />
                </Col>
                <Col className="gutter-row" span={6} style={{ marginBottom: "10px" }}>
                    <FormInput type='password' name='password' size='large' label='Password' />
                </Col>
                <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                    <FormSelectField size='large' name='student.academicDepartment' options={adOptions} label='Academic Department' placeholder='select' />
                </Col>
                <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                    <FormSelectField size='large' name='student.academicFaculty' options={facultyOptions} label='Academic Faculty' placeholder='select' />
                </Col>
                <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                    <FormSelectField size='large' name='student.academicSemester' options={asOptions} label='Academic Semester' placeholder='select' />
                </Col>
                <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                    <FormSelectField size='large' name='student.gender' options={genderOption} label='Gender' placeholder='select' />
                </Col>
                <Col className="gutter-row" span={8} style={{ marginBottom: "10px" }}>
                    <UploadImage />
                </Col>





            </Row>

        </div>
    );
};

export default StudentInfo;