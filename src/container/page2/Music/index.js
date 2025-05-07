import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Music = props => {
  useEffect(() => {
    console.log('mounted');

    axios
      .get(
        'https://1214131180-proxy.hiksemi.cn:8018/rest/1.0/file?action=get_list&append=no&web=1&PROXY_TARGET=F55251642&access_token=1d86c6b7c4439631450231b425bf31d6:1745916407:100000&mode=2&type=0&filter=0&space_state=clean&path=/drives/disk_a1/Users/admin/我的音乐',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => {
        console.log(res.data, 33);
        let data = res.data;

        let arr = data.split('\n');
        let arr2 = {};
        console.log(arr, 'arr');

        arr.forEach(ele => {
          if (ele.indexOf('{') > -1 && ele.indexOf('}') > -1) {
            // console.log(ele);
            const firstOpenBrace = ele.indexOf('{');
            const lastCloseBrace = ele.lastIndexOf('}');
            const result = ele.substring(firstOpenBrace, lastCloseBrace + 1);

            console.log(JSON.parse(result), 222);
          }
        });

        // 使用正则表达式匹配第一层 JSON 对象
        // const matches = data.match(/\{(?:[^{}]*"list"[^{}]*)\}|\{(?:[^{}]*"count"[^{}]*)\}/g);

        // console.log(matches, 333);

        // // 使用正则表达式提取 JSON 内容
        // const jsonPattern = /{.*?}/gs; // 使用单行模式和全局模式
        // const jsonMatches = data.match(jsonPattern);
        // console.log(jsonMatches,333)
      });
  }, []);

  return <div>123123</div>;
};

export default Music;
