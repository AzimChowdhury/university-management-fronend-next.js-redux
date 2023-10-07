'use client'

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTables from "@/components/ui/UMTables";
import { useDeleteSingleDepartmentMutation, useGetDepartmentQuery } from "@/redux/api/departmentApi";
import { getUserInfo } from "@/services/auth.services";
import { Button, Input, Modal, message } from 'antd';
import Link from 'next/link';
import { useState } from "react";
import { DeleteOutlined, ReloadOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import ActionBar from "@/components/ui/actionBar";
import { useDebounced } from "@/redux/hooks";
import dayjs from 'dayjs'
import DeleteModal from "@/components/ui/DeleteModal";

const Department = () => {
    const { role } = getUserInfo() as any;
    const query: Record<string, any> = {

    }
    const [size, setSize] = useState<number>(5)
    const [page, setPage] = useState<number>(1)
    const [sortBy, setSortBy] = useState<string>('')
    const [sortOrder, setSortOrder] = useState<string>("")
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState('')

    query['limit'] = size
    query['page'] = page
    query['sortBy'] = sortBy
    query['sortOrder'] = sortOrder
    // query['searchTerm'] = searchTerm
    const [deleteSingleDepartment] = useDeleteSingleDepartmentMutation()
    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600

    })
    if (!!debouncedTerm) {
        query['searchTerm'] = debouncedTerm
    }

    const { data, isLoading } = useGetDepartmentQuery({ ...query })

    const departments = data?.departments;
    const meta = data?.meta
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            render: function (data: any) {
                return data && dayjs(data).format('MMM D, YYYY - hh:mm A')
            },
            sorter: true
        },
        {
            title: 'Action',
            render: function (data: any) {
                return (
                    <>
                        {/* <Button style={{ margin: '0px 5px', padding: '0px 10px' }} onClick={() => console.log(data)} type="primary">
                            <EyeOutlined />
                        </Button> */}
                        <Link href={`/super_admin/department/edit/${data?.id}`}>
                            <Button style={{ margin: '0px 5px', padding: '0px 10px' }} onClick={() => console.log(data)} type="primary">
                                <EditOutlined />
                            </Button>
                        </Link>
                        <Button style={{ margin: '0px 5px', padding: '0px 10px' }} onClick={() => { showModal(); setDeleteId(data?.id) }} type="primary" danger>
                            <DeleteOutlined />
                        </Button>
                    </>
                )
            }
        },
    ];

    const onPaginationChange = (page: number, pagesize: number) => {
        setPage(page)
        setSize(pagesize)
    }

    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        setSortBy(field as string)
        setSortOrder(order === 'ascend' ? 'asc' : 'desc')
    }

    const resetFilters = () => {
        setSortBy('')
        setSortOrder('')
        setSearchTerm('')
    }


    const deleteHandler = async (id: string) => {
        message.loading('deleting . . .')
        try {
            await deleteSingleDepartment(id)
            message.success('Department Deleted successfully')
        } catch (err: any) {
            console.error(err.message);
            message.error(err.message)
        }
    };


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        deleteHandler(deleteId)
        setIsModalOpen(false);
        setDeleteId('')
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };





    return (
        <div>
            <UMBreadCrumb items={
                [
                    { label: `${role}`, link: `/${role}` },
                ]
            } />


            <ActionBar title="Department List">
                <Input
                    type="text"
                    size="large"
                    placeholder="search . . ."
                    style={{ width: '25%' }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div>
                    {
                        (!!sortBy || !!sortOrder || !!searchTerm) &&
                        <Button onClick={resetFilters} style={{ margin: '0px 10px' }} type="primary">
                            <ReloadOutlined />
                        </Button>
                    }

                    <Link href='/super_admin/department/create'><Button type='primary'>Create Department</Button></Link>

                </div>
            </ActionBar>


            <UMTables
                loading={isLoading}
                columns={columns}
                dataSource={departments}
                pageSize={size}
                totalPages={meta?.total}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            />


            {/* delete confirmation modal  */}

            <DeleteModal
                title="Are you sure you want to delete this department ? "
                subTitle="Remember once it will be deleted, you will never get it back. "
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </div>
    );
};

export default Department;