import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
    return (
        <div style={{ margin: ' 50vh 0px' }}>
            <Spin tip="Loading" size="large">
                <div className="content" />
            </Spin>
        </div>
    );
};

export default Loading;