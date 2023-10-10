import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from 'dayjs';

type UMDatePickerProps = {
    onChange?: (value1: Dayjs | null, value2: string) => void;
    name: string;
    label?: string;
    value?: Dayjs;
    size?: 'large' | 'small'
};

const FormDatePicker = ({
    onChange,
    name,
    label,
    size
}: UMDatePickerProps) => {
    const { control, setValue } = useFormContext();


    const handleOnChange: DatePickerProps['onChange'] = (date, dateString) => {
        onChange ? onChange(date, dateString) : null;
        setValue(name, date);
    };


    return (
        <div className={`flex flex-col  w-full`}>
            {label ? label : null}
            <br />
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <DatePicker
                        size={size}
                        defaultValue={dayjs(field.value) || ""}
                        onChange={handleOnChange}
                        style={{ width: '100%' }}
                    />
                )}
            />
        </div>
    );
};

export default FormDatePicker;