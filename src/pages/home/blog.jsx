import Taro, { useState } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { xedjio, liyig } from '../tools'
import newbbd from '../../static/newbbd0001.jpg'
function Blog() {
  const [blogTitle, setBlogTitle] = useState('JSPang Blog')
  useEffect(() => {
    xedjio()
    liyig()
  }, [])
  const gotoIndex = () => {
    Taro.navigateTo({ url: '/pages/index/index?blogTitle=' + blogTitle })
  }
  return (
    <View>
      <Text>Blog Page</Text>
      <Button onClick={gotoIndex}>我要去Index页面</Button>
      <View>
        <Image src={newbbd} width="100px" height="100px" />
      </View>
      是：{blogTitle==1?'Blog':''}
      {/* 短路符判断 */}
      是：{blogTitle==1 && 'Blog' || ''}
      <Image src={require('../../static/newbbd0001.jpg')} width="100px" height="100px" />
    </View>
  )
}
export default Blog