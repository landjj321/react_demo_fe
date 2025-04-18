import React, { useEffect, useState } from 'react';
import { Button } from 'antd'
import './style.less';

function PasswordCheck() {

    const [name, setName] = useState('2123');

    useEffect(() => {
        console.log('mounted');
        setName('321');
    }, []);

    return (
        <div>
            <Button onClick={() => {
                console.log('弹出验证')
            }}
                type="primary"
            >弹出验证</Button>
            {name}


            {/* <SubmitCheckDIalog /> */}
        </div>
    );
}

export default PasswordCheck;