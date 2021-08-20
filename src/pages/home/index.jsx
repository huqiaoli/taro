import Taro, {  useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Child from './child.jsx'
//Hooks新特性使用，引入了useState
function Index(){

  const [userName ,setUserName] = useState('Hello World!!!!')
  const [blogTitle,setBlogTitle] = useState('')
  useEffect(()=>{
    setBlogTitle(this.$router.params.blogTitle)
  },[])
  return ( 
    <View>
        <Text>{userName}</Text>
        <Child userName={userName}></Child>
    </View>
  )

}

export default Index