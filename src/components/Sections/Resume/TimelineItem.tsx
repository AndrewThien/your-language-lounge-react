import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, mode, price, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm sm:flex-none">{mode}</span>
          <span>•</span>
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{price}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
