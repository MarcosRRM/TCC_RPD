import React from 'react';
import {View,Image, Alert} from 'react-native';
import ControledCustomInput from '../../SharedComponents/ControledCustomInput';
import ThemedButton from '../../SharedComponents/ThemedButton';
import {WithThemeAndModalContext} from '../../Contexts/WithContexts';
import {ValidateEmail} from '../../Utils/Utils';
import AxiosClient from '../../Utils/AxiosClient';
import AuthData from '../../Utils/AuthData';
import EndPoints from '../../Utils/EndPoints';

const inputStyle={width: '90%', textAlign: 'center'};

@WithThemeAndModalContext
export default class AppLogin extends React.Component{

  state={
    Email: '',
    Password: '',
    Ready: false
  }

  async componentDidMount(){  
    if (await AuthData.getJwtToken()!==''){
      await AxiosClient.get(EndPoints.TestToken)
      .then(()=>{
        AuthData.Authenticated = true;
        this.props.showScreen('RPDList');
        console.log('ALREADY LOGGED ON!')
      })
      .catch((e)=>{
        console.log('ERROR:',e)
        // AuthData.clear()
      })
    }
    this.setState({Ready:true})
  }

  validateFields=()=>{
    if (!ValidateEmail(this.state.Email)){
      this.setState({ InvalidEmail:true });
      Alert.alert('Email inválido.');
      return false;
    }
    return true;
  }

  logInHandle = async () => {
    if (!this.validateFields()) return;
    
    this.props.ModalCtx.showModal('Loading',{message:'Entrando...'});
    
    let loggedIn = false;
    let needChangePW = false;
    await AxiosClient.post(EndPoints.LogIn,{
      email : this.state.Email,
      pw    : this.state.Password
    })
    .then(async (response)=>{
      AuthData.Authenticated = true;
      await AuthData.setJwtToken(response.data.Token);
      loggedIn = true;
      needChangePW = response.data.PasswordReseted;
    })
    .catch(error=>{
      console.log(error.response)
      if (error.response && error.response.status == 401){
        Alert.alert('Email ou senha inválidos!');
      }
      else {
        Alert.alert('Erro ao realizar login.', 'Verifique sua conexão com a internet.');
      }
    })
    .finally(()=>{this.props.ModalCtx.showModal()});

    if (loggedIn){
      if (needChangePW){
        Alert.alert('Você resetou sua senha.','Por favor, escolha uma nova senha.');
        this.props.showScreen('ChangePassword',{backTo:'APPLogin',clearOnBack:true});
      }
      else{
        this.props.showScreen('RPDList');
      }
      
    }
  }

  render(){
    return( this.state.Ready &&
      <View
      style={{
        width           : '100%',
        height          : '100%',
        flexDirection   : 'column',
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : this.props.theme.Background.Second
      }}
      >
        <Image
        style={{
          height:128,
          width:256,
          marginBottom: 10
        }}
        source={require('../../Resources/Images/Logos/MainLogo_Dark.png')}
        />
        
        <ControledCustomInput
        onChangeText={e=>this.setState({Email:e.slice(0,64)})}
        textContentType={'emailAddress'}
        value={this.state.Email}
        autoCompleteType={'email'}
        keyboardType={'email-address'}
        placeholder={'Email'}
        style={inputStyle}
        />
        
        <ControledCustomInput
        onChangeText={p=>this.setState({Password:p.slice(0,64)})}
        value={this.state.Password}
        textContentType={'password'}
        autoCompleteType={'password'}
        placeholder={'Senha'}
        style={inputStyle}
        secureTextEntry
        />
        
        <ThemedButton
        onPress={this.logInHandle}
        type={'Main'}
        title={'Entrar'}
        size={'Medium'}
        style={[{width: '90%', marginTop:20, marginBottom:10}]}
        />
        
        <ThemedButton
        onPress={()=>this.props.showScreen('NewAccount')}
        type={'Confirm'}
        title={'Cadastrar'}
        size={'Medium'}
        style={[{width: '90%', marginBottom:10}]}
        />

        <ThemedButton
        onPress={()=>this.props.showScreen('ForgotPassword')}
        type={'Danger'}
        title={'Esqueci minha senha'}
        size={'Medium'}
        style={[{width: '90%'}]}
        />

      </View>
    );
  }
}