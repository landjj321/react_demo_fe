import React, { Suspense, lazy } from 'react';
import './style.less';
import { Provider } from 'mobx-react';
import todosListStore from '@/store/todoList';
import PageContainer from '@/component/PageContainer';

const store = new todosListStore();

const Page2 = () => {
  return (
    <Provider store={store}>
      <PageContainer currentPage={2} store={store} />
    </Provider>
  );
};
export default Page2;
