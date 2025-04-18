import React, { useCallback } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import Card from './Card';
import update from 'immutability-helper';

const Dustbin = (props: any) => {
  const { cardList, changeCardList } = props;

  // 第一个参数是 collect 方法返回的对象，第二个参数是一个 ref 值，赋值给 drop 元素
  const [collectProps, droperRef] = useDrop({
    // accept 是一个标识，需要和对应的 drag 元素中 item 的 type 值一致，否则不能感应
    accept: 'Card',
  });

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      /**
       * 1、如果此时拖拽的组件是 Box 组件，则 dragIndex 为 undefined，则此时修改，则此时修改 cardList 中的占位元素的位置即可
       * 2、如果此时拖拽的组件是 Card 组件，则 dragIndex 不为 undefined，此时替换 dragIndex 和 hoverIndex 位置的元素即可
       */
      if (dragIndex === undefined) {
        const lessIndex = cardList.findIndex((item: any) => item.id === -1);
        changeCardList(
          update(cardList, {
            $splice: [
              [lessIndex, 1],
              [hoverIndex, 0, { bg: 'aqua', category: '放这里', id: -1 }],
            ],
          })
        );
      } else {
        const dragCard = cardList[dragIndex];
        changeCardList(
          update(cardList, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      }
      // eslint-disable-next-line
    },
    [cardList]
  );

  return (
    // 将 droper 赋值给对应元素的 ref
    <div
      ref={droperRef}
      style={{
        backgroundColor: 'white',
        border: '1px dashed gray',
        margin: '100px auto',
        minHeight: '300px',
        padding: '0 10px',
        textAlign: 'center',
        width: 320,
        boxSizing: 'border-box',
      }}
    >
      {cardList.length <= 0 ? (
        <div style={{ lineHeight: '60px' }}>请放入水果</div>
      ) : (
        cardList.map((item: any, index: number) => {
          return <Card index={index} key={item.id} moveCard={moveCard} {...item}></Card>;
        })
      )}
    </div>
  );
};

export default Dustbin;
