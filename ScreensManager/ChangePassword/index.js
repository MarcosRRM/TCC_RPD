import React from 'react';
import {View,Text,Alert} from 'react-native';
import ControledCustomInput from '../../SharedComponents/ControledCustomInput';
import ThemedButton from '../../SharedComponents/ThemedButton';
import { TextSizes, ScreenStyle } from '../../Styling/SharedStyles';
import {WithThemeAndModalAndRPDContext} from '../../Contexts/WithContexts';
import Header from '../../SharedComponents/Header';
import {Icon} from 'react-native-elements';
import { ValidatePW } from '../../Utils/Utils';
import AxiosClient from '../../Utils/AxiosClient';
import EndPoints from '../../Utils/EndPoints';
import AuthData from '../../Utils/AuthData';

@WithThemeAndModalAndRPDContext
export default class ChangePassword extends React.Component{

  static defaultProps = {
    clearOnBack: false
  }

  state={
    OldPassword: '',
    NewPassword: '',
    ConfirmNewPassword: ''
  }

  validateFields = () =>{
    if (!ValidatePW(this.state.OldPassword)){
      this.setState({ InvalidOldPW: true});
      Alert.alert('Senha atual inválida.');
      return false;
    }

    if (!ValidatePW(this.state.NewPassword)){
      this.setState({ InvalidNewPW: true});
      Alert.alert('Senha fraca.','Utilize:\n-No mínimo 8 caracteres.\n-Caracteres minúsculos E maiúsculos.\n-Pelo menos um número ou caracter especial.');
      return false;
    }

    if(this.state.NewPassword !== this.state.ConfirmNewPassword){
      this.setState({ InvalidConfirmPassword:true });
      Alert.alert('Senha de confirmação inválida.');
      return false;
    }

    return true;
  }

  changePasswordHandler = () => {
    if (!this.validateFields()) return;

    this.props.ModalCtx.showModal('Loading',{message:'Alterando senha...'});

    AxiosClient.put(EndPoints.ChangePassword,{
      currentPW: this.state.OldPassword,
      newPW: this.state.NewPassword
    })
    .then((response)=>{
      console.log('RESPONSE:',response.data)
      Alert.alert('Senha alterada com sucesso!','',[{text:'OK', onPress:()=>this.props.showScreen(this.props.backTo || 'RPDList')}])
    })
    .catch(error=>{
      console.log('ERROR:',error.response.data)
      Alert.alert('Falha ao trocar senha!',JSON.stringify(error.response.data));
    })
    .finally(()=>{this.props.ModalCtx.showModal()})

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

        <ControledCustomInput
        secureTextEntry
        value={this.state.OldPassword}
        onChangeText={(op)=>this.setState({OldPassword:op.slice(0,64)})}
        placeholder={'Senha atual'}
        style={[{width: '90%', marginBottom: 20, textAlign: 'center'}]}
        />

        <ControledCustomInput
        secureTextEntry
        value={this.state.NewPassword}
        onChangeText={(np)=>this.setState({NewPassword:np.slice(0,64)})}
        placeholder={'Nova senha'}
        style={[{width: '90%', marginBottom: 20, textAlign: 'center'}]}
        />

        <ControledCustomInput
        secureTextEntry
        value={this.state.ConfirmNewPassword}
        onChangeText={(cnp)=>this.setState({ConfirmNewPassword:cnp.slice(0,64)})}
        placeholder={'Repita a nova senha'}
        style={[{width: '90%', marginBottom: 20, textAlign: 'center'}]}
        />

        <ThemedButton
        onPress={this.changePasswordHandler}
        type={'Medium'}
        title={'Trocar senha'}
        size={'Medium'}
        style={[{marginBottom:20}]}
        />

        <Header>
          <View style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
            <Icon
            onPress={()=>{
              if(this.props.clearOnBack){
                AuthData.clear(true);
                this.props.RPDCtx.clear(true);
              }
              this.props.showScreen(this.props.backTo);
            }}
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
              TROCAR SENHA
            </Text>

            <View style={{width:50}}/>
          </View>
        </Header>
      </View>
    );
  }
}