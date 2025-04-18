import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import subHomeWrapper from '@/hocComponent/subHomeWrapper';
import routerConfig from '@/config/router';

// console.log(routerConfig,222222333)

interface IPageProp {
  currentPage: number;
}

const PageContainer = (props: IPageProp) => {
  // const currentPage = props.currentPage;

  const routes = routerConfig[props.currentPage - 1].children;
  // console.log(routes, 900);

  return (
    <Switch>
      {routes.map((route: any, idx: any) => (
        <Route
          path={route.path}
          key={route.name}
          component={lazy(() => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(import(`../../container/page${props.currentPage}/${route.name}`));
              }, 400);
            });
          })}
        />
      ))}
    </Switch>
  );
};

export default subHomeWrapper(PageContainer);
