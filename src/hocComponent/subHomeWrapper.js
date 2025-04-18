import React, { Suspense, lazy } from 'react';
import Loading from '@/component/Loading';

export default function subHomeWrapper(Comp) {
  return class Page extends React.Component {
    state = {};

    render() {
      return (
        <div className="page">
          <Suspense fallback={<Loading />}>
            <Comp {...this.props} />
          </Suspense>
        </div>
      );
    }
  };
}
