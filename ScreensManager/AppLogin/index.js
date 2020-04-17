import React from 'react';
import {View,Image} from 'react-native';
import UserInfoInput from '../../SharedComponents/UserInfoInput';
import ThemedButton from '../../SharedComponents/ThemedButton';

export default class AppLogin extends React.Component{

  render(){
    return(
      <View
      style={{
        width:'100%',
        height:'100%',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'purple'
      }}
      >
        <Image style={{height:128, width:256}} source={require('../../Resources/Images/Logos/MainLogo_Dark.png')}/>
        <UserInfoInput style={[{width: '80%'}]}/>
        <UserInfoInput style={[{width: '80%'}]}/>
        <ThemedButton title={'LogIn'} onPress={()=>this.props.showScreen('RPDList')}/>
      </View>
    );
  }
}