import React, { useState } from 'react';
import { Button, message, Upload } from 'antd';
import './index.less';
const Base64Page = (props: any) => {
  const [fileList, setFileList] = useState([]);

  return (
    <div className="Base64Page">
      <Upload
        // 是否展示文件列表
        // showUploadList={false}
        fileList={fileList}
        customRequest={options => {
          console.log(options.file, 1);
          const reader = new FileReader();
          reader.readAsDataURL(options.file);
          reader.onload = function (e: any) {
            console.log(e.target.result, '2223');
          };
        }}
        onChange={({ file, fileList }) => {
          console.log(file, fileList, 'onchange');

          setFileList(fileList);
        }}
      >
        <Button type="primary">视频转base64</Button>
      </Upload>
    
        

    </div>
  );
};

export default Base64Page;
