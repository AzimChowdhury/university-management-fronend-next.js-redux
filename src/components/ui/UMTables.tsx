'use client'
import { Table } from "antd";

type UMTableProps = {
    loading?: boolean,
    columns: any,
    dataSource: any,
    pageSize?: number
    totalPages?: number,
    showSizeChanger: boolean,
    onPaginationChange?: (page: number, pagesize: number) => void
    onTableChange?: (pagination: any, filter: any, sorter: any) => void
    showPagination?: boolean
}

const UMTables = ({
    loading = false,
    columns,
    dataSource,
    pageSize = 5,
    totalPages,
    showSizeChanger = true,
    onPaginationChange,
    onTableChange,
    showPagination = true

}: UMTableProps) => {

    const paginationConfig = showPagination ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onchange: onPaginationChange
    } : false;


    return <Table
        loading={false}
        columns={columns}
        dataSource={dataSource}
        pagination={paginationConfig}
        onChange={onTableChange}
    />
};

export default UMTables;