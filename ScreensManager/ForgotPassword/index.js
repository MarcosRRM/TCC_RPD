import React from 'react';
import {View,Text, Alert} from 'react-native';
import ControledCustomInput from '../../SharedComponents/ControledCustomInput';
import ThemedButton from '../../SharedComponents/ThemedButton';
import { TextSizes, ScreenStyle } from '../../Styling/SharedStyles';
import {WithThemeAndModalContext} from '../../Contexts/WithContexts';
import Header from '../../SharedComponents/Header';
import {Icon} from 'react-native-elements';
import AxiosClient from '../../Utils/AxiosClient';
import EndPoints from '../../Utils/EndPoints';
import {ValidateEmail} from '../../Utils/Utils';

@WithThemeAndModalContext
export default class ForgotPassword extends React.Component{

  state={
    Email: ''
  }

  handleResetPassword = () => {

    if (!ValidateEmail(this.state.Email)){
      this.setState({ InvalidEmail: true});
      Alert.alert('Email inválido.');
      return;
    }

    this.props.ModalCtx.showModal('Loading',{message:'Solicitando senha provisória...'});

    AxiosClient.post(EndPoints.ResetPW,{email:this.state.Email})
    .then(()=>{
      Alert.alert('A senha provisória foi enviada ao email.');
    })
    .catch((err)=>{
      Alert.alert('Erro ao solicitar senha provisória.', JSON.stringify(err.response.data) || '');
    })
    .finally(()=>{
      this.props.ModalCtx.showModal();
    })
  }

  render(){
    return(
      <View
      style={{
        height: '100%',
        width: '100%',
        paddingTop: ScreenStyle.HeaderHeight + 10,
        backgroundColor:this.props.theme.Background.Second,
        alignItems: 'center'
      }}
      >
        
        <Text
        style={{width: '90%', marginBottom: 20,color:this.props.theme.Text.Primary}}
        >
          Caso você tenha esquecido sua senha, pode solicitar que uma provisória seja enviada ao seu email digitando-o abaixo:
        </Text>

        <ControledCustomInput
        placeholder={'Email'}
        value={this.state.Email}
        onChangeText={(e)=>this.setState({Email:e.slice(0,64)})}
        style={[{width: '90%', marginBottom: 20, textAlign: 'center'}]}
        />

        <ThemedButton
        onPress={this.handleResetPassword}
        type={'Medium'}
        title={'Resetar senha'}
        size={'Medium'}
        style={[{marginBottom:20}]}
        />

        <Header>
          <View style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
            <Icon
            onPress={()=>this.props.showScreen('APPLogin')}
            name={'arrowleft'}
            type={'antdesign'}
            color={this.props.theme.Button.Danger.Background}
            size={50}
            />
            
            <Text
            style={[
              TextSizes.Big,
              {color:this.props.theme.Text.Primary}
            ]}
            >
              RESETAR SENHA
            </Text>

            <View style={{width:50}}/>
          </View>
        </Header>
      </View>
    );
  }
}