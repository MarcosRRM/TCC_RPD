import React from 'react';
import {View, Text, ScrollView, Switch, TouchableHighlight, Alert} from 'react-native';
import { WithThemeAndModalAndRPDContext } from '../Contexts/WithContexts';
import { TextSizes, ScreenStyle } from '../Styling/SharedStyles';
import Header from '../SharedComponents/Header';
import {Icon} from 'react-native-elements';
import AuthData from '../Utils/AuthData';

const buttonTextWrapper = {flexDirection:'row', alignItems:'center'}

@WithThemeAndModalAndRPDContext
export default class ConfigScreen extends React.Component{

  constructor(props){
    super(props);
    this.configButtonStyle ={
      justifyContent    : 'space-between',
      alignItems        : 'center',
      flexDirection     : 'row',
      paddingTop        : 8,
      paddingBottom     : 8,
      borderBottomWidth : 1,
      borderColor: props.theme.Text.Faded
    }
  }

  forcedSyncHandler = async () =>{
    this.props.ModalCtx.showModal('Loading',{message:'Forçando sincronização de registros...'});
    this.props.RPDCtx.syncRequest()
    .then(()=>{
      Alert.alert('Sincronizado com sucesso!');
    })
    .catch((error)=>{
      console.log('Error:',error);
      console.log('Data:',error.response.data);
      console.log('Sent:',error.config);
      Alert.alert('Erro ao sincronizar registros.');
    })
    .finally(()=>{this.props.ModalCtx.showModal();})
  }

  logOutHandler = async () => {
    Alert.alert('Deseja realmente sair?','Registros não sincronizados serão perdidos.',
    [
      {
        text:'SIM',
        onPress: async ()=>{
          AuthData.clear(true);
          await this.props.RPDCtx.clear(true);
          this.props.showScreen('APPLogin');
        }
      },
      {
        text:'NÃO'
      }
    ])
  }

  render(){
    return(
      <View
      style={{
        height: '100%',
        width: '100%',
        paddingTop: ScreenStyle.HeaderHeight,
        backgroundColor:this.props.theme.Background.Second
      }}
      >
        <ScrollView
        style={{
          paddingLeft:10,
          paddingRight:10,
          marginTop:10,
          height:'100%',
          width: '100%'
        }}
        >
          <TouchableHighlight onPress={this.props.theme.changeTheme}>
            <View style={this.configButtonStyle}>
              
              <View style={buttonTextWrapper}>
                <Icon
                name={'paint-brush'}
                type={'font-awesome'}
                containerStyle={{marginRight:5}}
                color={this.props.theme.Text.Primary}
                size={16}
                />
                <Text style={[TextSizes.Medium,{color:this.props.theme.Text.Primary}]}>Tema Claro</Text>
              </View>
              <Switch value={this.props.theme.isLightTheme} onValueChange={this.props.theme.changeTheme} />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.forcedSyncHandler}>
            <View style={this.configButtonStyle}>
              <View style={buttonTextWrapper}>
                <Icon
                name={'cloud-upload'}
                type={'font-awesome'}
                containerStyle={{marginRight:5}}
                color={this.props.theme.Text.Primary}
                size={16}
                />
                <Text style={[TextSizes.Medium,{color:this.props.theme.Text.Primary}]}>Forçar sincronização</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={()=>{this.props.showScreen('ChangePassword',{backTo:'ConfigScreen'})}}>
            <View style={this.configButtonStyle}>
              <View style={buttonTextWrapper}>
              <Icon
                name={'lock'}
                type={'entypo'}
                containerStyle={{marginRight:5}}
                color={this.props.theme.Text.Primary}
                size={16}
                />
                <Text style={[TextSizes.Medium,{color:this.props.theme.Text.Primary}]}>Alterar senha</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.logOutHandler}>
            <View style={this.configButtonStyle}>
              <View style={buttonTextWrapper}>
                <Icon
                name={'log-out'}
                type={'entypo'}
                containerStyle={{marginRight:5}}
                color={this.props.theme.Text.Primary}
                size={16}
                />
                <Text style={[TextSizes.Medium,{color:this.props.theme.Text.Primary}]}>Sair da conta</Text>
              </View>
            </View>
          </TouchableHighlight>
        </ScrollView>
        
        <Header>
          <View style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
            <Icon
            onPress={()=>this.props.showScreen('RPDList')}
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
              CONFIGURAÇÕES
            </Text>

            <View style={{width:50}}/>
          </View>
        </Header>
      </View>
    );
  }

}