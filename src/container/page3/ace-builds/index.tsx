import React, { useEffect, useState } from 'react';
import { useMount } from 'ahooks';
import { Form, Select, Checkbox, Row, Col } from 'antd';
import AceEditor from 'react-ace';
import ace from 'ace-builds';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
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
  'ace/mode/markdown',
  require('file-loader?esModule=false!ace-builds/src-noconflict/mode-markdown.js')
);
ace.config.setModuleUrl(
  'ace/snippets/markdown',
  require('file-loader?esModule=false!ace-builds/src-noconflict/snippets/markdown.js')
);
ace.config.setModuleUrl(
  'ace/mode/jsx',
  require('file-loader?esModule=false!ace-builds/src-noconflict/mode-jsx.js')
);
ace.config.setModuleUrl(
  'ace/snippets/jsx',
  require('file-loader?esModule=false!ace-builds/src-noconflict/snippets/jsx.js')
);
ace.config.setModuleUrl(
  'ace/theme/monokai',
  require('file-loader?esModule=false!ace-builds/src-noconflict/theme-monokai.js')
);
ace.config.setModuleUrl(
  'ace/theme/github',
  require('file-loader?esModule=false!ace-builds/src-noconflict/theme-github.js')
);
ace.config.setModuleUrl(
  'ace/ext/language_tools',
  require('file-loader?esModule=false!ace-builds/src-noconflict/ext-language_tools.js')
);

import { AceBuilderFontEnum, AceBuilderModeEnum, AceBuilderThemeEnum } from './config';

const AceBuilder = (props: any) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  const onLoad = () => {
    console.log(12333);
  };

  const onChange = (val: any) => {
    console.log(123, val);
  };

  useMount(() => {
    form.setFieldsValue({
      mode: AceBuilderModeEnum[0],
      theme: AceBuilderThemeEnum[0],
      fontSize: AceBuilderFontEnum[0],
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      showLineNumbers: true,
    });
  });

  useEffect(() => {
    console.log('更新了');
  });

  return (
    <div>
      <h2>AceBuilder 配置</h2>

      <Row>
        <Col span={6}>
          <Form
            layout="vertical"
            form={form}
            onValuesChange={values => {
              console.log(values);
              forceUpdate({});
            }}
          >
            <Form.Item name="mode" label="Mode(语法)" wrapperCol={{ span: 12 }}>
              <Select>
                {AceBuilderModeEnum.map((m, idx) => {
                  return (
                    <Select.Option key={m} value={m}>
                      {m}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item name="theme" label="Theme(主题)" wrapperCol={{ span: 12 }}>
              <Select>
                {AceBuilderThemeEnum.map((m, idx) => {
                  return (
                    <Select.Option key={m} value={m}>
                      {m}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item name="fontSize" label="fontSize(字体大小)" wrapperCol={{ span: 12 }}>
              <Select>
                {AceBuilderFontEnum.map((m, idx) => {
                  return (
                    <Select.Option key={m} value={m}>
                      {m}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              name="enableLiveAutocompletion"
              valuePropName="checked"
              label="enableLiveAutocompletion"
              wrapperCol={{ span: 12 }}
            >
              <Checkbox>是否需要代码补全</Checkbox>
            </Form.Item>

            <Form.Item
              name="showLineNumbers"
              valuePropName="checked"
              label="showLineNumbers"
              wrapperCol={{ span: 12 }}
            >
              <Checkbox>是否显示行号</Checkbox>
            </Form.Item>
          </Form>
        </Col>

        <Col span={8}>
          <AceEditor
            name="blah2"
            placeholder="Placeholder Text"
            mode={form.getFieldValue('mode')}
            theme={form.getFieldValue('theme')}
            // 字体大小
            fontSize={form.getFieldValue('fontSize')}
            width={'360px'}
            height={'700px'}
            onLoad={() => onLoad()}
            // 文本改变
            onChange={(val: any) => onChange(val)}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`console.log(123)`}
            setOptions={{
              enableBasicAutocompletion: form.getFieldValue('enableLiveAutocompletion'), //自动补全
              enableLiveAutocompletion: form.getFieldValue('enableLiveAutocompletion'), //提示自动补全功能
              enableSnippets: false, //是否启用片段
              showLineNumbers: form.getFieldValue('showLineNumbers'), //展示行号
              tabSize: 2,
            }}
          />
        </Col>

        <Col span={10}>
          <AceEditor
            name="ace2"
            placeholder="Placeholder Text"
            mode="jsx"
            theme="monokai"
            // 字体大小
            fontSize={14}
            width={'600px'}
            height={'700px'}
            // onLoad={() => onLoad()}
            // 文本改变
            // onChange={(val: any) => onChange(val)}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            readOnly={true}
            value={`
<AceEditor
  name="blah2"
  placeholder="Placeholder Text"
  mode={'${form.getFieldValue('mode')}'}
  theme={'${form.getFieldValue('theme')}'}
  // 字体大小
  fontSize={${form.getFieldValue('fontSize')}}
  width={'300px'}
  height={'700px'}
  onLoad={() => onLoad()}
  // 文本改变
  onChange={(val: any) => onChange(val)}
  showPrintMargin={true}
  showGutter={true} 
  highlightActiveLine={true}
  value={'console.log(123)'}
  setOptions={{
    enableBasicAutocompletion: ${form.getFieldValue('enableLiveAutocompletion')}, //自动补全
    enableLiveAutocompletion: ${form.getFieldValue('enableLiveAutocompletion')}, //提示自动补全功能
    enableSnippets: false, //是否启用片段
    showLineNumbers: true, //展示行号
    tabSize: 2,
  }}
/>

`}
            setOptions={{
              enableBasicAutocompletion: form.getFieldValue('enableLiveAutocompletion'), //自动补全
              enableLiveAutocompletion: form.getFieldValue('enableLiveAutocompletion'), //提示自动补全功能
              enableSnippets: false, //是否启用片段
              showLineNumbers: form.getFieldValue('showLineNumbers'), //展示行号
              tabSize: 2,
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AceBuilder;
