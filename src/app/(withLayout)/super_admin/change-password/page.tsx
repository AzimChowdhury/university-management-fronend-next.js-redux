"use client";

import FormInput from "@/components/forms/FormInput";
import Form from "@/components/forms/From";
import { Button } from "antd";

const ResetPassword = () => {
    const onSubmit = async (data: any) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            style={{ margin: "100px 0", display: "flex", justifyContent: "center" }}
        >
            <Form submitHandler={onSubmit}>
                <h3 style={{ marginBottom: "10px" }}>Reset Password</h3>
                <div style={{ margin: "5px 0" }}>
                    <FormInput name="oldPassword" label="Old password" type="password" />
                </div>
                <div style={{ margin: "5px 0" }}>
                    <FormInput name="newPassword" label="New password" type="password" />
                </div>
                <Button type="primary" htmlType="submit">
                    submit
                </Button>
            </Form>
        </div>
    );
};
export default ResetPassword;