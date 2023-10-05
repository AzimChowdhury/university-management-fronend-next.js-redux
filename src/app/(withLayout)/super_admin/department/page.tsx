'use client'

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTables from "@/components/ui/UMTables";
import { getUserInfo } from "@/services/auth.services";
import { Button } from 'antd';
import Link from 'next/link';

const Department = () => {
    const { role } = getUserInfo() as any
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a: any, b: any) => a.age - b.age
        },
        {
            title: 'Action',
            render: function (data: any) {
                return <Button onClick={() => console.log(data)} type="primary" danger>X</Button>
            }
        },
    ];
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
        },
        {
            key: '2',
            name: 'John',
            age: 42,
        },
    ];

    const onPaginationChange = (page: number, pagesize: number) => {

    }


    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
    }

    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` },
                ]
            } />
            <h1>department page</h1>
            <Link href='/super_admin/department/create'><Button type='primary'>Create Department</Button></Link>
            <UMTables
                loading={false}
                columns={columns}
                dataSource={dataSource}
                pageSize={5}
                totalPages={10}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />
        </div>
    );
};

export default Department;