import React from 'react';
import './ChildColumn.less';
import { Droppable, Draggable } from 'react-beautiful-dnd';

interface IChildColumnProps {
  childList: any[];
  columnName: string;
}

const ChildColumn = (props: IChildColumnProps) => {
  const { columnName, childList } = props;

  return (
    <Droppable droppableId={`${columnName}-list`} direction="vertical" type="row">
      {(provider, snapshot) => {
        return (
          <div className="itemList" {...provider.droppableProps} ref={provider.innerRef}>
            {childList.map((child, index) => {
              return (
                <Draggable draggableId={child.rowName} index={index} key={child.rowName}>
                  {DraggableProivder => {
                    return (
                      <div className="itemBox" {...DraggableProivder.draggableProps} ref={DraggableProivder.innerRef}>
                        <div {...DraggableProivder.dragHandleProps}>{child.rowName}</div>
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
          </div>
        );
      }}
    </Droppable>
  );
};

export default ChildColumn;
