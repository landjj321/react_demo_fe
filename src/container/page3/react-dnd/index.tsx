import React, { useState } from 'react';
import DndProviderWrapper from './DndProviderWrapper';
import Box from './Box';
import Dustbin from './Dustbin';
import { useDrag } from 'react-dnd';
import { Button } from 'antd';

const boxs: any = [
  { id: 1, category: 'Apple', bg: 'red' },
  { id: 2, category: 'Banana', bg: 'yellow' },
  { id: 3, category: 'Orange', bg: 'orange' },
  { id: 4, category: 'Grape', bg: 'purple' },
  { id: 5, category: 'Watermelon', bg: 'green' },
  { id: 6, category: 'Peach', bg: 'pink' },
];

const ReactDndDemo = (props: any) => {
  const [cardList, setCardList] = useState<any[]>([]);

  const changeCardList = (list: any[]) => {
    setCardList([...list]);
  };

  return (
    <DndProviderWrapper>
      {boxs.map((item: any) => {
        return (
          <Box key={item.id} {...item} cardList={cardList} changeCardList={changeCardList}></Box>
        );
      })}

      <Dustbin cardList={cardList} changeCardList={changeCardList}></Dustbin>
      <Button
        type="primary"
        onClick={() => {
          console.log(cardList);
        }}
      >
        确认
      </Button>
    </DndProviderWrapper>
  );
};

export default ReactDndDemo;
