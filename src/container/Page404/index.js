import React from 'react';
import { Result, Button } from 'antd';

export default function (props) {
    console.log(props)

    return (<>

        <Result
            extra={<Button type="primary">Back Home</Button>}
            status="404"
            subTitle="Sorry, the page you visited does not exist."
            title="404"
        />
    </>)


}