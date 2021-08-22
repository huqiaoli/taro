import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'

class Child extends Component {
  clickHandle(){
    this.props.change()
  }
  render() {
      return (
          <View>
              <Button onClick={this.clickHandle.bind(this)}>change</Button>
              <Text>子组件{this.props.name}</Text>
          </View>
      );
  }
}
Child.defaultProps={
  name:'123',
  change:null
}
export default Child;