"use client";
import { Col, Row } from "antd";
import FormInput from "../forms/FormInput";
import ACDepartmentField from "../forms/ACDepartmentField";
import ACFacultyField from "../forms/ACFacultyField";
import FormSelectField from "../forms/FromSelectField";
import { genderOption } from "@/constants/global";
import UploadImage from "../ui/uploadImage";
import ACSemesterField from "../forms/ACSemesterField";

const StudentInfo = () => {
    return (
        <div
            style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px",
                marginTop: "10px",
            }}
        >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                    className="gutter-row"
                    span={6}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    <FormInput
                        type="text"
                        name="student.name.firstName"
                        size="large"
                        label="First Name"
                    />
                </Col>
                <Col
                    className="gutter-row"
                    span={6}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    <FormInput
                        type="text"
                        name="student.name.middleName"
                        size="large"
                        label="Middle Name"
                    />
                </Col>
                <Col
                    className="gutter-row"
                    span={6}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    <FormInput
                        type="text"
                        name="student.name.lastName"
                        size="large"
                        label="Last Name"
                    />
                </Col>
                <Col
                    className="gutter-row"
                    span={6}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    <FormInput
                        type="password"
                        name="password"
                        size="large"
                        label="Password"
                    />
                </Col>
                <Col
                    className="gutter-row"
                    span={8}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    <ACDepartmentField
                        name="student.academicDepartment"
                        label="Academic Department"
                    />
                </Col>
                <Col
                    className="gutter-row"
                    span={8}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    <ACFacultyField
                        name="student.academicFaculty"
                        label="Academic Faculty"
                    />
                </Col>
                <Col
                    className="gutter-row"
                    span={8}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    <ACSemesterField
                        name="student.academicSemester"
                        label="Academic Semester"
                    />
                </Col>
                <Col
                    className="gutter-row"
                    span={8}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    <FormSelectField
                        size="large"
                        name="student.gender"
                        options={genderOption}
                        label="Gender"
                        placeholder="Select"
                    />
                </Col>
                <Col
                    className="gutter-row"
                    span={8}
                    style={{
                        marginBottom: "10px",
                    }}
                >
                    <UploadImage name="file" />
                </Col>
            </Row>
        </div>
    );
};

export default StudentInfo;