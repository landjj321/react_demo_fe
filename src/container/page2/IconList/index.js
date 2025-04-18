import React, { Component } from 'react';
import './style.less';
import Icon from '@/component/Icon';
import { Row, Col } from 'antd';

const req = require.context('@/component/Icon/svg', false, /\.svg$/);
const iconList2 = req
  .keys()
  .map(req)
  .map(item => {
    return item.default.id.split('-')[1];
  });

export default class IconList extends Component {
  state = {
    iconList: iconList2,
  };

  render() {
    return (
      <div className="iconlist-wrap">
        <Row>
          {this.state.iconList.map((item, index) => {
            return (
              <Col key={index} span={4} style={{ textAlign: 'center' }}>
                <Icon
                  className="icon"
                  iconName={item}
                  style={{ width: '40px', height: '40px' }}
                ></Icon>
                <p className="name">{item}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
