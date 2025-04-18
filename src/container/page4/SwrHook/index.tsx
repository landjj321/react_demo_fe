import React, { useState } from 'react';
import { useTestApi } from '@/hooks/test';
import { Button } from 'antd';
import useSWR, { SWRConfig } from 'swr';
import fetch from '@/utils/request';

const SwrHook = (props: any) => {
  const { data, error } = useTestApi();
  const { data: data2, error: error2 } = useSWR('/test', url => {
    return fetch({
      url: url,
    });
  });

  const [, forceUpdate] = useState({});

  console.log('render', data2?.result);
  return (
    <div>
      <h1>name:{data?.result.name}</h1>
      <Button
        type="primary"
        onClick={() => {
          forceUpdate({});
        }}
      >
        forceUpdate
      </Button>

      <hr />
      {/* <CompA /> */}
    </div>
  );
};

export default SwrHook;
