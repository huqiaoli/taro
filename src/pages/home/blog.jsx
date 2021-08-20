import Taro ,{useState}from '@tarojs/taro'
import {View , Text ,Button} from '@tarojs/components'
function Blog(){
  const  [blogTitle,setBlogTitle]=useState('JSPang Blog')

  const gotoIndex=()=>{
      Taro.navigateTo({url:'/pages/index/index?blogTitle='+blogTitle})
  }
  return (
      <View>
          <Text>Blog Page</Text>
          <Button onClick={gotoIndex}>我要去Index页面</Button>
      </View>
  )
}
export default Blog