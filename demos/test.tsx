/** Title: 文字水印 */
import React from 'react';

import { Table } from 'antd';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: 'actions1',
    key: 'actions1',
    render: (t, r, i) => (
      <Tag
        onClick={() => {
          message.info(`你点击了第${i + 1}`);
        }}
      >
        点击
      </Tag>
    ),
  },
];

import WaterMark from '../WaterMark';
import Tag from 'antd/lib/tag';

export default () => (
  <WaterMark content="测试">
    <Table dataSource={dataSource} columns={columns} />;
  </WaterMark>
);
