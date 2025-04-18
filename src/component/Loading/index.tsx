import React from 'react';
import { Spin } from 'antd'
import './index.less';

interface LoadingProps {

}

const Loading: React.FC<LoadingProps> = () => {

    return (
        <div className="loading-wrapper">
            <Spin size="large"></Spin>
        </div>
    )
}

export default Loading;