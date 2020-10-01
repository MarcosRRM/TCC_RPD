import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableHighlight, Alert, DatePickerAndroid, TimePickerAndroid} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextSizes,ScreenStyle} from '../../Styling/SharedStyles';
import Header from '../../SharedComponents/Header';
import RPDTextArea from './RPDTextArea';
import RPDSectionTitle from './RPDSectionTitle';
import RPDInputGroup from './RPDInputGroup';
import {WithThemeAndModalAndRPDContext} from '../../Contexts/WithContexts';

@WithThemeAndModalAndRPDContext
export default class RPDEditor extends React.Component{

  static defaultProps={
    localIndex : -1
  }

  constructor(props){
    super(props);
    this.state={

      Changed : false,
      
      RPDTitle        : props.Title || '',
      RPDDateTime     : props.DateTime || new Date(),
      RPDSituation    : props.Situation || '',
      RPDAutoThoughts : props.AutoThoughts || '',
      RPDEmotion      : props.Emotion || '',
      RPDResult       : props.Result || '',
      RPDOutcome      : props.Outcome || ''
    }
  }

  dateSelect = async () =>{
    const { action, year, month, day} = await DatePickerAndroid.open({
      date    : this.state.RPDDateTime,
      maxDate : new Date()
    });

    if (action === DatePickerAndroid.dateSetAction) {
      
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: true,
        hour: this.state.RPDDateTime.getHours(),
        minute: this.state.RPDDateTime.getMinutes()
      });

      if(action === TimePickerAndroid.timeSetAction){
        this.setState({RPDDateTime: new Date(year,month, day, hour, minute), Changed: true});
      }
    }
  }

  handleInfoUpdate=(_name, _value)=>{
    if (this.state[_name] !== undefined){
      let currentState = this.state;
      currentState[_name] = _value;
      currentState.Changed = true;
      this.setState(currentState);
    }
  }

  saveRPD = () =>{
    this.props.RPDCtx.addOrSaveRPD({
      ID           : this.props.ID,
      PersonID     : this.props.PersonID,
      LastUpdate   : new Date(),
      DateTime     : this.state.RPDDateTime,
      Title        : this.state.RPDTitle,
      Situation    : this.state.RPDSituation,
      AutoThoughts : this.state.RPDAutoThoughts,
      Emotion      : this.state.RPDEmotion,
      Result       : this.state.RPDResult,
      Outcome      : this.state.RPDOutcome
    },this.props.localIndex);
    
    this.props.ModalCtx.showModal('Loading',{message:'Sincronizando...'})
    this.props.RPDCtx.syncRequest()
    .then(()=>{
      this.props.ModalCtx.showModal();
    })
    .catch(()=>{
      Alert.alert('Falha ao sincronizar.','Cheque a sua conexão de internet.\nVocê pode tentar sincronizar novamente através do menu de configurações.');
    })
  }

  handleSaveButton=()=>{

    if (this.state.RPDTitle === ''){
      Alert.alert('Preencha o título para salvar.');
    }
    else if( !this.state.Changed){
      Alert.alert('Sem alterações para serem salvas.');
    }
    else{
      Alert.alert(
        'Salvar registro?',
        this.props.ID?'O registro será atualizado.':'Um novo registro será criado.',
        [
          {
            text:'Não',
            style:'cancel'
          },
          {
            text:'Sim',
            onPress: ()=>{
              this.saveRPD();
              this.props.showScreen('RPDList');
            }
          }
        ]
      );
    }
  }

  handleBackButton=()=>{
    if(this.state.Changed){
      Alert.alert(
        'Descartar alterações?',
        null,
        [
          {
            text:'Não',
            style:'cancel'
          },
          {
            text:'Sim',
            onPress:()=>this.props.showScreen('RPDList')
          }
        ]
      )
    }
    else{
      this.props.showScreen('RPDList')
    }
  }
  
  render(){
    return(
      <View
      style={{
        height: '100%',
        width: '100%',
        paddingTop: ScreenStyle.HeaderHeight,
        backgroundColor: this.props.theme.Background.First
      }}
      >
        <ScrollView
        style={{
          paddingLeft:10,
          paddingRight:10,
          height:'100%',
          width: '100%'
        }}
        >
          
          <RPDInputGroup>
            <RPDSectionTitle themeIndex={5}>Título e Data</RPDSectionTitle>
            <TextInput
            onChangeText={(newValue)=>this.handleInfoUpdate('RPDTitle',newValue.slice(0,32))}
            value={this.state.RPDTitle}
            multiline={false}
            numberOfLines={1}
            style={[
              TextSizes.Medium,
              {
                borderBottomWidth:2,
                borderBottomColor:this.props.theme.Editor.Input[5].Border,
                padding:2,
                marginBottom: 5
              },
              {
                color:this.props.theme.Editor.Input[5].Border,
              }
            ]}
            />

            <View style={{ flexDirection:'row', marginTop: 10, alignItems:'center' }}>
            <Icon
            name={'calendar-o'}
            color={this.props.theme.Editor.Input[5].Title}
            type={'font-awesome'}
            />
            <Text
            onPress={this.dateSelect}
            style={
              [
                TextSizes.Medium,
                {
                  marginLeft: 15,
                  color:this.props.theme.Editor.Input[5].Title
                }
              ]
            }
            >
              {this.state.RPDDateTime.toLocaleString('pt-BR')}
            </Text>
            </View>
          </RPDInputGroup>
          
          
          <RPDInputGroup>
            <RPDSectionTitle themeIndex={0}>Situação</RPDSectionTitle>
            <RPDTextArea themeIndex={0} onChangeText={(newValue)=>this.handleInfoUpdate('RPDSituation',newValue.slice(0,255))} value={this.state.RPDSituation}/>
          </RPDInputGroup>

          <RPDInputGroup>
            <RPDSectionTitle themeIndex={1}>Pensamentos Automáticos</RPDSectionTitle>
            <RPDTextArea themeIndex={1} onChangeText={(newValue)=>this.handleInfoUpdate('RPDAutoThoughts',newValue.slice(0,255))} value={this.state.RPDAutoThoughts}/>
          </RPDInputGroup>
          
          <RPDInputGroup>
            <RPDSectionTitle themeIndex={2}>Emoção</RPDSectionTitle>
            <RPDTextArea themeIndex={2} onChangeText={(newValue)=>this.handleInfoUpdate('RPDEmotion',newValue.slice(0,255))} value={this.state.RPDEmotion}/>
          </RPDInputGroup>
          
          <RPDInputGroup>
            <RPDSectionTitle themeIndex={3}>Conclusão</RPDSectionTitle>
            <RPDTextArea themeIndex={3} onChangeText={(newValue)=>this.handleInfoUpdate('RPDResult',newValue.slice(0,255))} value={this.state.RPDResult}/>
          </RPDInputGroup>
          
          <RPDInputGroup>
            <RPDSectionTitle themeIndex={4}>Resultado</RPDSectionTitle>
            <RPDTextArea themeIndex={4} onChangeText={(newValue)=>this.handleInfoUpdate('RPDOutcome',newValue.slice(0,255))} value={this.state.RPDOutcome}/>
          </RPDInputGroup>

        </ScrollView>
        <Header>
          <View style={{width:'100%',height:'100%', alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
            <Icon
            onPress={this.handleBackButton}
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
              EDITAR
            </Text>
            
            <TouchableHighlight onPress={this.handleSaveButton}>
              <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 54,
                width: 54,
                borderRadius: 100,
                backgroundColor: this.props.theme.Button.Confirm.Background
              }}
              >
                <Icon
                name={'content-save-edit'}
                type={'material-community'}
                iconStyle={{marginLeft:4}}
                color={this.props.theme.Button.Confirm.Foreground}
                size={40}
                />
              </View>
            </TouchableHighlight>
          </View>
        </Header>
      </View>
    )
  }
}