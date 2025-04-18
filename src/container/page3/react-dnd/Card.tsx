import React, { useRef } from 'react';
import { DragSourceMonitor, DropTargetMonitor, useDrag, useDrop } from 'react-dnd';

const Card = (props: any) => {
  const { bg, category, index, moveCard, id } = props;
  const ref = useRef(null);

  const [{ isDragging }, dragRef, dragPreview] = useDrag({
    type: 'Card',
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
    //item 中包含index属性,则在drop组件 hover和drop是可以根军第一天各参数获取index的值

    item: { index },
  });

  const [, dropRef] = useDrop({
    accept: 'Card',
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // 拖拽元素下标与鼠标悬浮元素下标一致时，不进行操作
      if (dragIndex === hoverIndex) {
        return;
      }

      // 确定屏幕上矩形范围
      const hoverBoundingRect = ref.current!.getBoundingClientRect();

      // 获取中点垂直坐标
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // 确定鼠标位置
      const clientOffset = monitor.getClientOffset();

      // 获取距顶部距离
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      /**
       * 只在鼠标越过一半物品高度时执行移动。
       *
       * 当向下拖动时，仅当光标低于50%时才移动。
       * 当向上拖动时，仅当光标在50%以上时才移动。
       *
       * 可以防止鼠标位于元素一半高度时元素抖动的状况
       */

      // 向下拖动
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // 向上拖动
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // 执行 move 回调函数
      moveCard(dragIndex, hoverIndex);

      /**
       * 如果拖拽的组件为 Box，则 dragIndex 为 undefined，此时不对 item 的 index 进行修改
       * 如果拖拽的组件为 Card，则将 hoverIndex 赋值给 item 的 index 属性
       */
      if (item.index !== undefined) {
        item.index = hoverIndex;
      }
    },
  });

  /**
   * 使用 drag 和 drop 对 ref 进行包裹，则组件既可以进行拖拽也可以接收拖拽组件
   * 使用 dragPreview 包裹组件，可以实现拖动时预览该组件的效果
   */
  dragPreview(dropRef(ref));

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        background: bg,
        margin: '16px 6px',
        // Card 为占位元素是，透明度 0.4，拖拽状态时透明度 0.2，正常情况透明度为 1
        opacity: id === -1 ? 0.4 : isDragging ? 0.2 : 1,
        padding: '20px 0px',
        verticalAlign: 40,
        width: 288,
        cursor: 'move',
      }}
    >
      {id !== -1 &&
        dragRef &&
        dragRef(
          <div>
            <b>选项:</b>
            {category}
          </div>
        )}
    </div>
  );
};

export default Card;
