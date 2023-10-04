"use client"

import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form"

type SelectOptions = {
    label: string;
    value: string
}

type SelectFieldProps = {
    options: SelectOptions[]
    name: string;
    size?: 'large' | 'small';
    value?: string | string[] | undefined;
    defaultValue?: SelectOptions
    label?: string
    placeholder: string
}

const FormSelectField = ({ name, size, placeholder, value, label, options }: SelectFieldProps) => {
    const { control } = useFormContext()
    return (
        <>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange } }) => (
                    <Select
                        onChange={onChange}
                        options={options}
                        size={size}
                        value={value}
                        style={{ width: "100%" }}
                        placeholder={placeholder}
                    />
                )}
            />
        </>
    );
}
export default FormSelectField;