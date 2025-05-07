export interface IRouter {
  id?: number;
  name?: string;
  type?: string;
  path?: string;
  icon?: string;
  children?: IRouter[];
}

const routerConfig: IRouter[] = [
  {
    id: 1000,
    name: '基础语法',
    type: 'user',
    path: '/page1',
    children: [
      {
        id: 1001,
        name: 'WithRouterCom',
        path: '/page1/withrouter',
        icon: 'lock',
      },
      {
        id: 1002,
        name: 'RefCom',
        path: '/page1/RefCom',
        icon: 'lock',
      },
      {
        id: 1003,
        name: 'HocCom',
        path: '/page1/HocCom',
        icon: 'lock',
      },
      {
        id: 1004,
        name: 'testCom',
        path: '/page1/testCom',
        icon: 'lock',
      },
      {
        id: 1005,
        name: 'LazyCom',
        path: '/page1/lazyCom',
        icon: 'lock',
      },
    ],
  },
  {
    id: 2000,
    type: 'user',
    name: '自定义应用',
    path: '/page2',
    children: [
      {
        id: 2001,
        name: 'Calendar',
        path: '/page2/calendar',
        icon: 'calendar',
      },
      {
        id: 2002,
        name: 'PasswordCheck',
        path: '/page2/PasswordCheck',
        icon: 'password',
      },
      {
        id: 2003,
        name: 'todoList',
        path: '/page2/todoList',
        icon: 'todolist',
      },
      {
        id: 2004,
        name: 'IconList',
        path: '/page2/iconlist',
        icon: 'icon',
      },
      {
        id: 2005,
        name: 'Base64',
        path: '/page2/base64',
        icon: 'icon',
      },
      {
        id: 2006,
        // name 需要和 文件名一致
        name: 'Music',
        path: '/page2/music',
        icon: 'icon',
      },
    ],
  },
  {
    id: 3000,
    name: '第三方组件',
    type: 'user',
    path: '/page3',
    children: [
      {
        id: 3001,
        name: 'echart',
        path: '/page3/echart',
        icon: 'chart',
      },
      {
        id: 3003,
        name: 'xlsx',
        path: '/page3/xlsx',
        icon: 'chart',
      },
      {
        id: 3004,
        name: 'mobx',
        path: '/page3/mobx',
        icon: 'chart',
      },
      {
        id: 3005,
        name: 'antV-S2',
        path: '/page3/antV-S2',
        icon: 'chart',
      },
      {
        id: 3006,
        name: 'ace-builds',
        path: '/page3/ace-builder',
        icon: 'chart',
      },
      {
        id: 3007,
        name: 'react-beautiful-dnd',
        path: '/page3/react-beautiful-dnd',
        icon: 'chart',
      },
      {
        id: 3008,
        name: 'react-grid-layout',
        path: '/page3/react-grid-layout',
        icon: 'chart',
      },
      {
        id: 3009,
        name: 'react-dnd',
        path: '/page3/react-dnd',
        icon: 'chart',
      },
    ],
  },
  {
    id: 4000,
    name: 'Hooks',
    type: 'user',
    path: '/page4',
    children: [
      {
        id: 4001,
        name: 'SwrHook', //组件文件名
        path: '/page4/swr-hook',
        icon: 'chart',
      },
    ],
  },
  {
    id: 5000,
    name: '性能优化',
    type: 'user',
    path: '/page5',
    children: [
      {
        id: 5001,
        name: 'TimeSlice', //组件文件名
        path: '/page5/time-slice',
        icon: 'chart',
      },
    ],
  },
];
export default routerConfig;
