import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Button } from 'antd';
import './style.less';

/* 获取随机颜色 */
function getColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return 'rgba(' + r + ',' + g + ',' + b + ',0.8)';
}

/* 获取随机位置 */
function getPosition(position: { width: number; height: number }) {
  const { width, height } = position;
  return {
    left: Math.ceil(Math.random() * width) + 'px',
    top: Math.ceil(Math.random() * height) + 'px',
  };
}

const Circle = (props: any) => {
  const { position } = props;
  const style = useMemo(() => {
    //用useMemo缓存，计算出来的随机位置和色值。
    return {
      background: getColor(),
      ...getPosition(position),
    };
  }, []);

  return <div style={style} className="circle"></div>;
};

const TimeSlice = (props: any) => {
  const [dataList, setDataList] = useState<any>([]); // 数据源列表
  const [renderList, setRenderList] = useState<any>([]); //渲染列表
  const [position, setPosition] = useState({
    width: 0,
    height: 0,
  });
  const [isShow, setIsShow] = useState(false);
  const eachRenderNum = 500;
  const boxRef = useRef<any>(null);

  useEffect(() => {
    const { offsetHeight, offsetWidth } = boxRef.current;
    setPosition({
      height: offsetHeight,
      width: offsetWidth,
    });
  }, []);

  useEffect(() => {
    if (isShow) {
      const originList = new Array(20000).fill(1);
      setDataList(originList);
    }
  }, [isShow]);

  useEffect(() => {
    if (dataList.length > 0) {
      const times = Math.ceil(dataList.length / eachRenderNum); /* 计算需要渲染此次数*/
      let index = 1;
      toRenderList(index, times);
    }
  }, [dataList]);
  // 递归渲染  toRednerList
  const toRenderList = (index: any, times: any) => {
    if (index > times) return; // 如果渲染完成,则退出
    const renderCircleDom = renderNewList(index);
    renderList.push(renderCircleDom);
    /* 通过缓存element把所有渲染完成的list缓存下来，下一次更新，直接跳过渲染 */
    setRenderList([...renderList]);
    /* 用 requestIdleCallback 代替 setTimeout 浏览器空闲执行下一批渲染 */

    requestIdleCallback(() => {
      toRenderList(++index, times);
    });
  };

  const renderNewList = (index: any) => {
    /* 得到最新的渲染列表 */
    const list = dataList.slice((index - 1) * eachRenderNum, index * eachRenderNum);
    return (
      <React.Fragment key={index}>
        {list.map((item: any, idx: any) => (
          <Circle key={idx} position={position}></Circle>
        ))}
      </React.Fragment>
    );
  };
  return (
    <div className="time-slice-wrapper" ref={boxRef}>
      时间切片:
      <Button type="primary" onClick={() => setIsShow(true)}>
        show
      </Button>
      {isShow && <div className="bigData_index">{renderList}</div>}
    </div>
  );
};

export default TimeSlice;
