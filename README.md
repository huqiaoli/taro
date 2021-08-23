## taro3.0+dva+mocker+request

基于 taro3.x 搭建的简易框架,集成了 dva,taro-request,eslint 检查等

#### Taro 路由配置

Taro中的路由设置跟React是不同的，它是通过app.jsx中的pages来配置的，并且谁配置在第一个数组位置，谁就是默认打开的首页

在/src/app.jsx下，然后pages的数组里面加入

```
pages: [
    'pages/blog/blog',
    'pages/index/index'
],
```

#### 页面间的跳转

Taro提供了6个相关的导航API，我们可以使用这些API进行跳转，需要注意的是这些有些是小程序专用的。
- navigateTo: 最基本的跳转方式，可以返回上级页面。三端都支持的，小程序、H5、React Native。
- redirectTo：不记录上集页面，直接跳转。三端都支持的，小程序、H5、React Native。
- switchTab： Tab之间进行切换，这个要配合Taro的导航栏一起使用，三端都支持的，小程序、H5、React Native。
- navigateBack: 返回上一级页面，这个在小程序中常使用，三端都支持的，小程序、H5、React Native。
- relaunch：关闭所有额面，打开到应用内某个页面。三端都支持的，小程序、H5、React Native。
- getCurrentPages:获取当前页面信息所用，这个H5是不支持的。（注意）

#### Taro中JSX的列表渲染

```
{ glsp.map((item,index)=>{
    return (
        <View>{item.name}</View>
    )
}) }
```
#### 在JSX中使用逻辑判断

```
<view>
    是：{Num==1?'joy':'role'}
</view>
//or
<view>
    是：{Num==1 && 'joy' || 'role'}
</view>
```