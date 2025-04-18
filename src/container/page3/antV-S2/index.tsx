import React from 'react';
import { SheetComponent } from '@antv/s2-react';
// import '@antv/s2-react/dist/style.min.css';
import { s2DataConfig,s2Options } from './data';

const AntV_S2 = (props: any) => {
  return (
    <div>
      <h2>@antv/s2</h2>

      <SheetComponent
        dataCfg={s2DataConfig}
        options={s2Options}
      />
    </div>
  );
};

export default AntV_S2;
