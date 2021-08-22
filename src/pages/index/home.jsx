import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
import Child from './Child';

export default class Index extends Component {
  state={
    name:'jon'
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  click(){
    this.setState({name:'tom'},()=>{
      console.log(this.state.name);
    })
  }
  change(){
    this.setState({name:'change name'})
  }
  render () {
    return (
      <View className='index'>
        <Button onClick={this.click.bind(this)}>改变名字</Button>
        <Text>{this.state.name}</Text>
        <Child name='role' change={this.change.bind(this)}/>
      </View>
    )
  }
}
