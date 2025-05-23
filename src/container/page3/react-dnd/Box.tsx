import React from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';

let id = 1;

const Box = (props: any) => {
  const { bg, category, cardList, changeCardList } = props;

  const [, dragRef] = useDrag({
    type: 'Card',
    item() {
      const useless = cardList.find((item: any) => item.id === -1);
      // 拖拽开始时，向 cardList 数据源中插入一个占位的元素，如果占位元素已经存在，不再重复插入
      if (!useless) {
        changeCardList([{ bg: 'aqua', category: '放这里', id: -1 }, ...cardList]);
      }
      return {
        

          
        category,
      };
    },
    end(_, monitor: DragSourceMonitor) {
      const uselessIndex = cardList.findIndex((item: any) => item.id === -1);
      /**
       * 拖拽结束时，判断是否将拖拽元素放入了目标接收组件中
       *  1、如果是，则使用真正传入的 box 元素代替占位元素
       *  2、如果否，则将占位元素删除
       */
      if (monitor.didDrop()) {
        cardList.splice(uselessIndex, 1, { ...monitor.getItem(), id: id++ });
      } else {
        cardList.splice(uselessIndex, 1);
      }
      // 更新 cardList 数据源
      changeCardList(cardList);
    },
  });

  return (
    <div
      ref={dragRef}
      style={{
        background: bg,
        display: 'inline-block',
        margin: 20,
        padding: '16px 30px',
        width: 200,
        cursor: 'move',
        textAlign: 'center',
      }}
    >
      {category}
    </div>
  );
};

export default Box;
