"use client";
import { Button, Col, Input, Row } from "antd";
import loginImage from "../../assets/login.png";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import Form from "@/components/forms/From";
import FormInput from "@/components/forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";

type FormValues = {
    id: string;
    password: string;
};

const LoginPage = () => {

    const [userLogin] = useUserLoginMutation()

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            const res = await userLogin({ ...data }).unwrap()
            console.log(res);
        } catch (err) { }
    };
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh",
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image src={loginImage} width={500} alt="login image" />
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h1
                    style={{
                        margin: "15px 0px",
                    }}
                >
                    First login your account
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name="id" type="text" size="large" label="User Id" />
                        </div>
                        <div
                            style={{
                                margin: "15px 0px",
                            }}
                        >
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="User Password"
                            />
                        </div>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default LoginPage;