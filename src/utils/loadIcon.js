import { flatMap } from 'lodash';

export default function (routers) {
  const routeIconList = flatMap(routers, route => [...route.children]);
  //   console.log(test, 333);

  const requireContext = require.context('@/component/Icon/svg', false, /\.svg$/);

  requireContext.keys().map(key => {
    // console.log(key,"key")
    routeIconList.some(item => key.indexOf(item) > -1);
    requireContext(key);
  });
}
