import React from 'react';
import {View, Text, TextInput, ScrollView, TouchableHighlight, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextSizes,ScreenStyle} from '../../Styling/SharedStyles';
import Header from '../../SharedComponents/Header';
import RPDTextArea from './RPDTextArea';
import RPDSectionTitle from './RPDSectionTitle';
import RPDInputGroup from './RPDInputGroup';
import {WithRPDnThemeContext} from '../../Contexts/ContextsExport';


@WithRPDnThemeContext
export default class RPDEditor extends React.Component{

  constructor(props){
    super(props);
    this.state={

      Changed : false,

      RPDId      : props.Id || '',
      RPDUpdated : props.Updadated || false,
      
      RPDTitle        : props.Title || '',
      RPDDateTime     : props.DateTime || new Date(),
      RPDSituation    : props.Situation || '',
      RPDAutoThoughts : props.AutoThoughts || '',
      RPDEmotion      : props.Emotion || '',
      RPDResult       : props.Result || '',
      RPDOutcome      : props.Outcome || ''
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

  emptyFields=()=>{
    if(
      this.state.RPDTitle        !== '' &&
      this.state.RPDSituation    !== '' &&
      this.state.RPDAutoThoughts !== '' &&
      this.state.RPDEmotion      !== '' &&
      this.state.RPDResult       !== '' &&
      this.state.RPDOutcome      !== ''
    ) return false;
    return true;
  }

  saveRPD = () =>{
    this.props.RPDCtx.addOrSaveRPD(
      {
        Id           : this.state.RPDId,
        Updated      : true,
        DateTime     : this.state.RPDDateTime,
        Title        : this.state.RPDTitle,
        Situation    : this.state.RPDSituation,
        AutoThoughts : this.state.RPDAutoThoughts,
        Emotion      : this.state.RPDEmotion,
        Result       : this.state.RPDResult,
        Outcome      : this.state.RPDOutcome
      }
    )
  }

  handleSaveButton=()=>{

    if (this.emptyFields()){
      Alert.alert('Preencha todos os campos.');
    }
    else if( !this.state.Changed){
      Alert.alert('Sem alterações para serem salvas.');
    }
    else{
      Alert.alert(
        'Salvar registro?',
        this.state.RPDId===''?'Um novo registro será criado.':'O registro será atualizado.',
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
        backgroundColor:this.props.theme.Background.First
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
            <RPDSectionTitle themeIndex={5}>Título</RPDSectionTitle>
            <TextInput
            onChangeText={(newValue)=>this.handleInfoUpdate('RPDTitle',newValue)}
            value={this.state.RPDTitle}
            multiline={false}
            numberOfLines={1}
            style={[
              TextSizes.Medium,
              {
                borderBottomWidth:2,
                borderBottomColor:this.props.theme.Editor.Input[5].Border,
                padding:2
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
              {this.state.RPDDateTime.toDateString()}
            </Text>
            </View>
          </RPDInputGroup>
          
          
          <RPDInputGroup>
            <RPDSectionTitle themeIndex={0}>Situação</RPDSectionTitle>
            <RPDTextArea themeIndex={0} onChangeText={(newValue)=>this.handleInfoUpdate('RPDSituation',newValue)} value={this.state.RPDSituation}/>
          </RPDInputGroup>

          <RPDInputGroup>
            <RPDSectionTitle themeIndex={1}>Pensamentos Automáticos</RPDSectionTitle>
            <RPDTextArea themeIndex={1} onChangeText={(newValue)=>this.handleInfoUpdate('RPDAutoThoughts',newValue)} value={this.state.RPDAutoThoughts}/>
          </RPDInputGroup>
          
          <RPDInputGroup>
            <RPDSectionTitle themeIndex={2}>Emoção</RPDSectionTitle>
            <RPDTextArea themeIndex={2} onChangeText={(newValue)=>this.handleInfoUpdate('RPDEmotion',newValue)} value={this.state.RPDEmotion}/>
          </RPDInputGroup>
          
          <RPDInputGroup>
            <RPDSectionTitle themeIndex={3}>Conclusão</RPDSectionTitle>
            <RPDTextArea themeIndex={3} onChangeText={(newValue)=>this.handleInfoUpdate('RPDResult',newValue)} value={this.state.RPDResult}/>
          </RPDInputGroup>
          
          <RPDInputGroup>
            <RPDSectionTitle themeIndex={4}>Resultado</RPDSectionTitle>
            <RPDTextArea themeIndex={4} onChangeText={(newValue)=>this.handleInfoUpdate('RPDOutcome',newValue)} value={this.state.RPDOutcome}/>
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