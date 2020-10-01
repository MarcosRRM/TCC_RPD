import React from 'react';
import {View,DatePickerAndroid,Text, Alert} from 'react-native';
import ControledCustomInput from '../../SharedComponents/ControledCustomInput';
import ThemedButton from '../../SharedComponents/ThemedButton';
import { TextSizes, ScreenStyle } from '../../Styling/SharedStyles';
import {WithThemeAndModalContext} from '../../Contexts/WithContexts';
import Header from '../../SharedComponents/Header';
import {Icon} from 'react-native-elements';
import {ValidateEmail,ValidatePW,ValidateName} from '../../Utils/Utils';
import AxiosClient from '../../Utils/AxiosClient';
import EndPoints from '../../Utils/EndPoints';

const inputStyle = {width: '90%', marginBottom: 20, textAlign: 'center'}

@WithThemeAndModalContext
export default class NewAccount extends React.Component{

  state={
    Name: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    BirthDay: '',
    
    InvalidName: false,
    InvalidEmail: false,
    InvalidPassword: false,
    InvalidConfirmPassword: false,
  }

  dateSelect = async () =>{
    const {action, year, month, day} = await DatePickerAndroid.open({
      date    : this.state.BirthDay!==''? this.state.BirthDay : new Date(),
      maxDate : new Date()
    });
    if (action === DatePickerAndroid.dateSetAction) {
      this.setState({BirthDay: new Date(year,month, day)})
    }
  }

  validateFields = () => {
    if (!ValidateName(this.state.Name)){
      this.setState({ InvalidName:true});
      Alert.alert('Nome inválido.');
      return false;
    }

    if (!ValidateEmail(this.state.Email)){
      this.setState({ InvalidEmail:true });
      Alert.alert('Email inválido.');
      return false;
    }

    if(!(this.state.BirthDay instanceof Date)){
      this.setState({ InvalidBirthDay:true });
      Alert.alert('Selecione sua data de nascimento.');
      return false;
    }

    if((new Date().getFullYear() - this.state.BirthDay.getFullYear()) > 150){
      this.setState({ InvalidBirthDay:true });
      Alert.alert('Idade inválida.');
      return false;
    }
    
    if(!ValidatePW(this.state.Password)){
      this.setState({ InvalidPassword:true });
      Alert.alert('Senha fraca.','Utilize:\n-No mínimo 8 caracteres.\n-Caracteres minúsculos E maiúsculos.\n-Pelo menos um número ou caracter especial.');
      return false;
    }

    if(this.state.Password !== this.state.ConfirmPassword){
      this.setState({ InvalidConfirmPassword:true });
      Alert.alert('Senha de confirmação inválida.');
      return false;
    }

    return true;
  }

  createAccountHandler = () => {

    if (!this.validateFields()) return;
    
    this.props.ModalCtx.showModal('Loading',{message:'Criando conta...'});
    
    AxiosClient.post(EndPoints.NewAccount,{
      email:this.state.Email,
      pw : this.state.Password,
      fullName : this.state.Name,
      birthDay : this.state.BirthDay
    })
    .then(response=>{
      Alert.alert('Conta criada com sucesso!',null,[{text:'OK', onPress:()=>this.props.showScreen('APPLogin')}])
    })
    .catch(error=>{
      Alert.alert('Erro ao criar conta!',error?.response?.data);
    })
    .finally(()=>{this.props.ModalCtx.showModal()});
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
        value={this.state.Name}
        onChangeText={(n)=>this.setState({Name:n.slice(0,64)})}
        placeholder={'Nome Completo'}
        style={inputStyle}
        />

        <ControledCustomInput
        value={this.state.Email}
        onChangeText={(e)=>this.setState({Email:e.slice(0,64)})}
        placeholder={'Email'}
        style={inputStyle}
        />

        <ControledCustomInput
        placeholder={'Data de nascimento'}
        style={inputStyle}
        fake
        onPress={this.dateSelect}
        value={this.state.BirthDay instanceof Date? this.state.BirthDay.toLocaleDateString('pt-BR'):''}
        />

        <ControledCustomInput
        value={this.state.Password}
        onChangeText={(p)=>this.setState({Password:p.slice(0,64)})}
        placeholder={'Senha'}
        style={inputStyle}
        secureTextEntry
        />

        <ControledCustomInput
        value={this.state.ConfirmPassword}
        onChangeText={(cp)=>this.setState({ConfirmPassword:cp.slice(0,64)})}
        placeholder={'Confirme a senha'}
        style={inputStyle}
        secureTextEntry
        />

        <ThemedButton
        onPress={this.createAccountHandler}
        type={'Medium'}
        title={'Criar conta'}
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
              CRIAR CONTA
            </Text>

            <View style={{width:50}}/>
          </View>
        </Header>
      </View>
    );
  }
}