import React, { Component, useMemo, useState, useRef, useEffect } from 'react';
import { useMount } from 'ahooks';
import AceEditor from 'react-ace';
import echarts from 'echarts/lib/echarts';
import ace from 'ace-builds';
/** echarts */
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/graphic';
/** ace-builds */
// import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-beautify';
import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/ext-language_tools';

ace.config.setModuleUrl(
  'ace/mode/javascript',
  require('file-loader?esModule=false!ace-builds/src-noconflict/mode-javascript.js')
);
ace.config.setModuleUrl(
  'ace/mode/javascript_worker',
  require('file-loader?esModule=false!ace-builds/src-noconflict/worker-javascript.js')
);
ace.config.setModuleUrl(
  'ace/snippets/javascript',
  require('file-loader?esModule=false!ace-builds/src-noconflict/snippets/javascript.js')
);
ace.config.setModuleUrl(
  'ace/mode/json',
  require('file-loader?esModule=false!ace-builds/src-noconflict/mode-json.js')
);
ace.config.setModuleUrl(
  'ace/snippets/json',
  require('file-loader?esModule=false!ace-builds/src-noconflict/snippets/json.js')
);
ace.config.setModuleUrl(
  'ace/mode/json_worker',
  require('file-loader?esModule=false!ace-builds/src-noconflict/worker-json.js')
);

ace.config.setModuleUrl(
  'ace/theme/monokai',
  require('file-loader?esModule=false!ace-builds/src-noconflict/theme-monokai.js')
);
ace.config.setModuleUrl(
  'ace/ext/beautify',
  require('file-loader?esModule=false!ace-builds/src-noconflict/ext-beautify.js')
);
ace.config.setModuleUrl(
  'ace/ext/searchbox',
  require('file-loader?esModule=false!ace-builds/src-noconflict/ext-searchbox.js')
);
ace.config.setModuleUrl(
  'ace/ext/language_tools',
  require('file-loader?esModule=false!ace-builds/src-noconflict/ext-language_tools.js')
);

import { Col, Row, Form, Select, Button } from 'antd';
import configs from './config';

console.log(configs);

const charts_enum = [
  {
    label: '柱状图',
    key: 1,
    value: 1,
  },
  {
    label: '堆叠面积图',
    key: 2,
    value: 2,
  },
];

const icon = require('../../../img/log.png');
const Chart = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState(1);
  const echartsRef = useRef(null);

  const handleChangeType = value => {
    console.log(value);
    setType(value);

    // return value;
  };

  const options = useMemo(() => {
    let option;
    if (type > 0) {
      eval(configs[type]);
    } else {
    }
    return option;
  }, [type]);

  useEffect(() => {
    echartsRef.current?.clear();
    echartsRef.current?.setOption(options);
  }, [options]);

  const runConfig = () => {
    const type = form.getFieldValue('type');
    // console.log(type);
  };

  useMount(() => {
    echartsRef.current = echarts.init(document.getElementById('chart'));
    echartsRef.current.setOption(options);
  });

  return (
    <div>
      <h1>chart2</h1>
      <Form
        form={form}
        layout="inline"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
          type: 1,
        }}
      >
        <Form.Item label="图表类型" name="type">
          <Select style={{ width: 200 }} onChange={handleChangeType}>
            {charts_enum.map((item, idx) => {
              return (
                <Select.Option key={item.key} value={item.value}>
                  {item.label}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button type="primary" onClick={runConfig}>
            运行
          </Button>
        </Form.Item>
      </Form>

      <Row>
        <Col>
          <div id="chart" style={{ width: '858px', height: '478px' }}></div>
        </Col>
        <Col>
          <AceEditor
            name="blah2"
            placeholder="Placeholder Text"
            mode={'javascript'}
            theme={'monokai'}
            // 字体大小
            fontSize={12}
            width={'600px'}
            height={'700px'}
            // 文本改变
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={configs[type]}
            onChange={value => {
              console.log(value);
              setType(0);
            }}
            setOptions={{
              enableBasicAutocompletion: true, //自动补全
              enableLiveAutocompletion: true, //提示自动补全功能
              enableSnippets: false, //是否启用片段
              showLineNumbers: true, //展示行号
              tabSize: 2,
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Chart;
