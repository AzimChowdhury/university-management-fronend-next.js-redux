"use client";
import ActionBar from "@/components/ui/actionBar";
import ClassSchedule from "@/components/ui/ClassSchedule";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTables from "@/components/ui/UMTables";
import { useMyCourseSchedulesQuery } from "@/redux/api/studentApi";
import { IOfferedCourseSchedule } from "@/types";

const MyCourseSchedulePage = () => {
    const { data, isLoading } = useMyCourseSchedulesQuery({});
    const myCourseSchedules = data?.myCourseSchedules;

    const columns = [
        {
            title: "Course name",
            dataIndex: "offeredCourse",
            render: function (data: any) {
                return <>{data.course.title}</>;
            },
        },
        {
            title: "Credit",
            dataIndex: "offeredCourse",
            render: function (data: any) {
                return <>{data.course.credits}</>;
            },
        },
        {
            title: "Section",
            dataIndex: "offeredCourseSection",
            render: function (data: any) {
                return <>{data.title}</>;
            },
        },
        {
            title: "Class Schedules",
            dataIndex: "offeredCourseSection",
            render: function (data: any) {
                return (
                    <>
                        <ClassSchedule
                            data={
                                data.offeredCourseClassSchedules as IOfferedCourseSchedule[]
                            }
                        />
                    </>
                );
            },
        },
    ];

    return (
        <>
            <UMBreadCrumb
                items={[
                    { label: `student`, link: `/student` },
                    { label: `courses`, link: `/student/courses` },
                ]}
            />

            <ActionBar title="My course schedules"></ActionBar>

            <UMTables
                loading={isLoading}
                dataSource={myCourseSchedules}
                columns={columns}
                showPagination={false}
                showSizeChanger={false} />
        </>
    );
};

export default MyCourseSchedulePage;