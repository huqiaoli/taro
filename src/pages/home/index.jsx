import React, { useState, useEffect}  from react
import Taro, {Current}  from @tarojs/taro
import { View, Text } from '@tarojs/components'
import './index.less'
import Child from './child.jsx'
//Hooks新特性使用，引入了useState
function Index(){

  const [userName ,setUserName] = useState('Hello World!!!!')
  const [blogTitle,setBlogTitle] = useState('')
  // getCurrentInstance().router 和 useRouter 返回的内容也一样
  // const router = useRouter()
  useEffect(()=>{
    // console.log(getCurrentInstance().router)
    setBlogTitle(getCurrentInstance().router.params.blogTitle)
  },[])
   
  return ( 
    <View>
        <Text>{userName}</Text>
        <Child userName={userName}></Child>
    </View>
  )

}

export default Index
