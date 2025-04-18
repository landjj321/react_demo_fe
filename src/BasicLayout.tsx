import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';
import page1 from './container/page1';
import page2 from './container/page2';
import page3 from './/container/page3';
import page4 from './/container/page4';
import page5 from './/container/page5';
import Page404 from './container/Page404';
import { Provider } from './contexts/DictContext.js';
// import request from './utils/request.js'
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import MyIcon from './component/Icon';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import './layout.less';
import routerConfig from './config/router';
import loadIcon from '@/utils/loadIcon';

interface BasicLayoutProps {
  [key: string]: any;
}

// 预加载svg
loadIcon(routerConfig);

const BasicLayout: React.FC<BasicLayoutProps> = () => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [navs] = useState(routerConfig);
  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    let _breadcrumb = [].concat([navs[0].name, navs[0].children[0].name]);
    setBreadcrumb(_breadcrumb);
  }, []);

  const toggle = () => {
    setCollapsed(value => !value);
  };

  const goToPath = (path: any) => {
    setBreadcrumb(path.split('/'));
    history.push(path);
  };

  return (
    <Provider value={{ b: 22, c: 33 }}>
      <Layout>
        <Sider collapsed={collapsed} collapsible trigger={null} width={200}>
          <div className="logo" />
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0, marginTop: '60px' }}
            theme="dark"
          >
            {navs.map(item => {
              return item.children.length > 0 ? (
                // 一级目录
                <SubMenu key={`${item.id}`} title={<span> {item.name}</span>}>
                  {item.children.map(child => {
                    return (
                      <Menu.Item
                        key={child.id}
                        onClick={() => goToPath(child.path)}
                        style={{ display: 'flex', flexDirection: 'row' }}
                        icon={
                          <MyIcon
                            iconName={child.icon}
                            style={{ width: 14, height: 14, color: '#fff', marginRight: 14 }}
                          ></MyIcon>
                        }
                      >
                        {child.name}
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              ) : (
                <Menu.Item
                  key={item.id}
                  onClick={() => {
                    goToPath(item.path);
                  }}
                >
                  <span>
                    <Icon type={item.type} />
                    {item.name}
                  </span>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header className="header" style={{ padding: 0 }}>
            {collapsed ? (
              <MenuUnfoldOutlined onClick={toggle} style={{ color: '#fff', fontSize: 20 }} />
            ) : (
              <MenuFoldOutlined onClick={toggle} style={{ color: '#fff', fontSize: 20 }} />
            )}
          </Header>

          {/* 面包屑 */}
          <Breadcrumb style={{ margin: '16px 8px' }}>
            {breadcrumb.map((item, index) => {
              return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
            })}
          </Breadcrumb>

          <Layout>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Switch>
                <Route component={page1} path="/page1"></Route>
                <Route component={page2} path="/page2"></Route>
                <Route component={page3} path="/page3"></Route>
                <Route component={page4} path="/page4"></Route>
                <Route component={page5} path="/page5"></Route>
                <Route component={page1} path="/"></Route>
                <Route component={Page404} path="*" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Provider>
  );
};

// export default withRouter(App);
//withRouter 一个高阶组件,包含组件,注入路由
export default withRouter(BasicLayout);
