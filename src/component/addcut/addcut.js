import  Taro,{Component}  from  '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import './addcut.less';
class  AddCut  extends  Component{
	constructor(){
		super(...arguments);
		this.state={
			Num:0
		};
	}
	componentDidMount(){}
	//减1的逻辑
	CutFood(){}
	//加1的逻辑
	AddFood(){}
	render(){
		let {Num}=this.state;
		let hideClass=Num>0?"":"hide";
	   return  (<View className="addcut">
	   	<Image  onClick={this.CutFood.bind(this)} className={"opeate_img "+hideClass} src={require('../../assets/img/cut.png')}></Image>
	   	<Text className={"food_num "+hideClass}>{Num}</Text>
	   	<Image onClick={this.AddFood.bind(this)} className="opeate_img" src={require('../../assets/img/add.png')}></Image>
	   </View>)
	}
}
export default AddCut;