/** Title: 文字水印 */
import React from 'react';
import WaterMark from '../WaterMark';

export default () => (
  <WaterMark content="测试">
    <div style={{ height: 500 }} />
  </WaterMark>
);
