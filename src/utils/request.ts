import { fetch } from 'whatwg-fetch';
export type FetchOptions = {
  url: string;
  method?: string;
  data?: any;
  headers?: any;
};

export default async function ({
  url,
  method = 'get',
  data = {},
  headers = { 'Content-Type': 'application/json' },
}: FetchOptions) {
  console.log('执行了fetch');

  let requestConfig = {
    method: method,
    headers: {
      Accept: 'application/json',
    },
  };

  if (method === 'post') {
    Object.defineProperty(requestConfig, 'body', {
      value: JSON.stringify(data),
    });
  } else {
    let dataStr = '';
    for (let [k, v] of Object.entries(data)) {
      dataStr += `${k}=${v}&`;
    }

    if (dataStr !== '') {
      url = url + '?' + dataStr.substr(0, dataStr.lastIndexOf('&'));
    }
  }

  // header
  if (Object.keys(headers).length !== 0) {
    Object.assign(requestConfig.headers, headers);
  }

  let response = await fetch(url, requestConfig);
  let result = await response.json();

  return result;
}
