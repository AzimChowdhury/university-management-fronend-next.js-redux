
import { useAcademicDepartmentsQuery } from "@/redux/api/academic/deptApi";
import FormSelectField, { SelectOptions } from "./FromSelectField";

type ACDepartmentFieldProps = {
    name: string;
    label?: string;
    // onChange: (e: any) => void;
};

const ACDepartmentField = ({
    name,
    label,
    // onChange,
}: ACDepartmentFieldProps) => {
    const { data, isLoading } = useAcademicDepartmentsQuery({
        limit: 100,
        page: 1,
    });
    const academicDepartments = data?.academicDepartments;
    const acDepartmentOptions = academicDepartments?.map((acDepartment) => {
        return {
            label: acDepartment?.title,
            value: acDepartment?.id,
        };
    });

    return (
        <FormSelectField
            name={name}
            label={label}
            options={acDepartmentOptions as SelectOptions[]}
        // handleChange={(e) => onChange(e)}
        />
    );
};

export default ACDepartmentField;