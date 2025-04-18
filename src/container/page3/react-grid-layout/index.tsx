import React, { useState } from 'react';
import { Responsive, WidthProvider, ResponsiveProps } from 'react-grid-layout';
import './index.less';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

// 响应式
const GridLayout = WidthProvider(Responsive);

const GridLayoutDemo = (props: any) => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 1, static: true },
    { i: 'b', x: 1, y: 0, w: 3, h: 1, minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 1 },
  ];
  const GridLayoutProps = useState<ResponsiveProps>({
    cols: { lg: 12 },
    rowHeight: 100,
    width: 1200,
  });

  return (
    <div className="GridLayoutDemo">
      <GridLayout
        className="layout"
        layouts={{ lg: layout }}
        // 生成几列
        cols={{ lg: 12 }}
        breakpoints={{ lg: 1200 }}
        // 组件行高
        rowHeight={50}
        width={1200}
      >
        <div className="blockA" key="a">
          a
        </div>
        <div className="blockB" key="b">
          b
        </div>
        <div className="blockC" key="c">
          c
        </div>
      </GridLayout>
    </div>
  );
};

export default GridLayoutDemo;
