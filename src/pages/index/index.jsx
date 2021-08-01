import React from 'react';
import { View ,Text } from '@tarojs/components';
import { connect } from 'react-redux';
import { AtIcon, AtTag, AtCard } from 'taro-ui';
import './index.less';
// eslint-disable-next-line
const Index = React.forwardRef((props, ref) => {
  const {
    global: { data },
  } = props;
  const html = `
    <div class="table-responsive-sm">
      <table class="table table-hover text-nowrap table-responsive">
       <thead>
        <tr class="bg-warning">
          <th scope="col" class="center">组织</th>
          <th scope="col" class="center">货源结构</th>
          <th scope="col" class="center">时实货量</th>
          <th scope="col" class="center">票数</th>
          <th scope="col" class="center">环比昨日</th>
          <th scope="col" class="center">环比增长率</th>
          <th scope="col" class="center">同比增长</th>
          <th scope="col" class="center">同比增长率</th>
          <th scope="col" class="center">票均重(kg)</th>
          <th scope="col" class="center">目标值</th>
          <th scope="col" class="center">完成率</th>
          <th scope="col" class="center">同比排名</th>
        </tr>
      </thead>
     <tbody>
        ${data
    .map(
      itm => `
          <tr key={itm.id}>
            <td class="center">${itm.city}</th>
            <td class="center">${itm.name}</td>
            <td class="center">${itm.name2}</td>
            <td class="center">${itm.name3}</td>
            <td class="center">${itm.name4}</td>
            <td class="center">${itm.name5}</td>
            <td class="center">${itm.name6}</td>
            <td class="center">${itm.name7}</td>
            <td class="center">${itm.name8}</td>
            <td class="center">${itm.name8}</td>
            <td class="center">${itm.name8}</td>
            <td class="center">${itm.name8}</td>
          </tr>
        `,
    )
    .join('')}
      </tbody>
    </table>
  </div>
`;
  return (
      <View className='components-page'>
        <View className='express-top-head'>
          <View className='express-top-text express-flex'>
            <Text>安能快运05月17日 湖北实时货量播报</Text>
            <Text>更新时间: 15:00:00</Text>
          </View>
        </View>
        <View className='express-top-btn'>
          <View>
            <AtTag size='small' className='active'>0 全网</AtTag>
            <AtTag size='small' className='btn-left'>0 网络</AtTag>
            <AtTag size='small' className='btn-left'>0 市场</AtTag>
          </View>
          <View>
            <AtTag size='small'>查看大区明细</AtTag>
            <AtTag size='small'>查看分拨明细</AtTag>
            <AtTag size='small'>查看片区明细</AtTag>
          </View>
        </View>
        <View className='express-top-center'>
          <View className='at-row'>
            <View className='at-col'>
              <View className='express-curr-total'>
                <View className='mt10'>当前总货量</View>
                <Text className='express-curr-number mt10'>213</Text><Text> 吨</Text>
              </View>
            </View>
            <View className='at-col'>
              <AtCard
                className='express-top-card'
                extra='84.9%↑'
                title='昨日'
                renderIcon={
                  <AtIcon prefixClass='at-icon' value='clock' size='16' color='#6190e8' customStyle={{ marginRight: '5px' }} ></AtIcon>
                }
              >
                <View className='express-flex'><Text>全天</Text><Text>461</Text></View>
                <View className='express-flex'><Text>同期</Text><Text>115</Text></View>
                <View className='express-flex'><Text>环比</Text><Text>98</Text></View>
              </AtCard>
            </View>
            <View className='at-col'>
              <AtCard
                className='express-top-card red'
                extra='-1.1%↓'
                title='上周'
                renderIcon={
                  <AtIcon prefixClass='at-icon' value='calendar' size='16' color='#6190e8' customStyle={{ marginRight: '5px' }} ></AtIcon>
                }
              >
                <View className='express-flex'><Text>全天</Text><Text>461</Text></View>
                <View className='express-flex'><Text>同期</Text><Text>115</Text></View>
                <View className='express-flex'><Text>同比</Text><Text>98</Text></View>
              </AtCard>
            </View>
          </View>
        </View>
      <View className='express-top-bottom' dangerouslySetInnerHTML={{ __html: html }}></View>
      <View className='express-top-view'>点击查看口径说明</View>
    </View>
  );
});
export default connect(state => ({
  global: state.global,
}))(Index);
