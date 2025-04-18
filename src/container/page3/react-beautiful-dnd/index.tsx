import React, { useState } from 'react';
import './style.less';
/**
 * Droppable 装在一个DragDropContext,不能嵌套
 * Droppable 可拖拽区域
 * Draggable 可拖拽组件
 *
 */
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ChildColumn from './ChildColumn';

type DragEndProps = {
  combine: any;
  destination: { droppableId: string; index: number };
  draggableId: string;
  mode: string;
  reason: string;
  source: { index: number; droppableId: string };
  type: string;
};

const generateItem = (columnName: string, length: number) => {
  return Array.from({ length }, (value, index) => {
    return {
      rowName: `${columnName}-${index}`,
    };
  });
};

const generateData = (column: number, row: number) => {
  let arr = Array.from({ length: column }, (value, key) => {
    return {
      columnName: `column-${key}`,
      children: generateItem(`column-${key}`, row),
    };
  });
  return arr;
};

const initData = generateData(3, 10);

const MyDnd = (props: any) => {
  const [columnOrder, setColumnOrder] = useState(initData);

  const onDragStart = () => {};

  const onDragUpdate = () => {};

  /**
   * 必须设置onDragEnd
   *
   */
  const onDragEnd = (result: DragEndProps) => {
    if (!result?.destination) return;
    console.log(result);

    const startDroppableId = result.source.droppableId;
    const endDroppableId = result.destination.droppableId;
    if (startDroppableId == 'all-columns') {
      const startIndex = result.source.index;
      const endIndex = result.destination.index;
      const [removedColumn] = columnOrder.splice(startIndex, 1);
      columnOrder.splice(endIndex, 0, removedColumn);
      setColumnOrder(columnOrder);
    } else {
      if (startDroppableId == endDroppableId) {
        const startIndex = result.source.index;
        const endIndex = result.destination.index;
        const selectedColumnName = result.source.droppableId.split('-list')[0];
        const selectedColumnList: any = columnOrder.find((column, index) => {
          return column.columnName == selectedColumnName;
        })?.children;
        // console.log(selectedColumnList);
        // console.log(startColumnKey, endColumnKey);
        const [removedColumn] = selectedColumnList.splice(startIndex, 1);
        selectedColumnList.splice(endIndex, 0, removedColumn);
        columnOrder.forEach((item, index) => {
          if (item.columnName == selectedColumnName) {
            item.children = selectedColumnList;
          }
        });
        setColumnOrder(columnOrder);
      } else {
        const startIndex = result.source.index;
        const endIndex = result.destination.index;
        const startColumnName = result.source.droppableId.split('-list')[0];
        const endColumnName = result.destination.droppableId.split('-list')[0];

        const startColumnList: any = columnOrder.find((column, index) => {
          return column.columnName == startColumnName;
        })?.children;

        const endColumnList: any = columnOrder.find((column, index) => {
          return column.columnName == endColumnName;
        })?.children;

        const [removedColumn] = startColumnList.splice(startIndex, 1);
        endColumnList.splice(endIndex, 0, removedColumn);
        columnOrder.forEach((item, index) => {
          if (item.columnName == startColumnName) {
            item.children = startColumnList;
          }

          if (item.columnName == endColumnName) {
            item.children = endColumnList;
          }
        });

        setColumnOrder(columnOrder);
      }
    }
  };

  //const columnOrder = ['column-0', 'column-1', 'column-2'];

  return (
    <div className="dnd-layout">
      <DragDropContext onDragStart={onDragStart} onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
        <div className="dnd-pro">
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided, snapshot) => (
              <div className="outter-area" {...provided.droppableProps} ref={provided.innerRef}>
                {columnOrder.map((column, idx) => {
                  return (
                    <Draggable draggableId={column.columnName} index={idx} key={column.columnName}>
                      {child_provided => {
                        return (
                          <div
                            className="outter-columns"
                            {...child_provided.draggableProps}
                            ref={child_provided.innerRef}
                          >
                            <h3
                              className="outter-column-header"
                              {...child_provided.dragHandleProps}
                            >
                              {column.columnName}
                            </h3>

                            <ChildColumn
                              childList={column.children}
                              columnName={column.columnName}
                            ></ChildColumn>
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default MyDnd;
