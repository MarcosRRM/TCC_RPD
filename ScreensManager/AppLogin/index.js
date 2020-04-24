import React from 'react';
import {View,Image} from 'react-native';
import ControledCustomInput from '../../SharedComponents/ControledCustomInput';
import ThemedButton from '../../SharedComponents/ThemedButton';
import {WithThemeContext} from '../../Contexts/ThemeContext';

@WithThemeContext
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
        backgroundColor:this.props.theme.Background.Secundary
      }}
      >
        <Image
        style={{
          height:128,
          width:256,
          marginBottom: 10,
          backgroundColor: 'black'
        }}
        source={require('../../Resources/Images/Logos/MainLogo_Dark.png')}
        />
        
        <ControledCustomInput placeholder={'User'} style={[{width: '80%', textAlign: 'center'}]}/>
        
        <ControledCustomInput placeholder={'Password'} style={[{width: '80%', textAlign: 'center', marginBottom:20}]}/>
        
        <ThemedButton
        onPress={()=>this.props.showScreen('RPDList')}
        type={'Medium'}
        title={'Entrar'}
        size={'Medium'}
        style={[{marginBottom:10}]}
        />
        
        <ThemedButton
        onPress={()=>this.props.showScreen('RPDList')}
        type={'Confirm'}
        title={'Cadastrar'}
        size={'Medium'}
        />
      </View>
    );
  }
}