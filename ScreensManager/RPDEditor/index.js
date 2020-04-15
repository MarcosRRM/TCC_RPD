import React from 'react';
import {View, TextInput, ScrollView, DatePickerAndroid, ShadowPropTypesIOS, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextStyle,ScreenStyle} from '../../Styling/SharedStyles';
import Header from '../../SharedComponents/Header';
import RPDTextArea from './RPDTextArea';
import RPDSectionTitle from './RPDSectionTitle';


export default class RPDEditor extends React.Component{

  constructor(props){
    super(props);
    this.state={
      RPDTitle:props.title,
      RPDDateTime: new Date(),
      RPDSituation: '',
      RPDAutoThoughts: '',
      RPDEmotion: '',
      RPDConclusion: '',
      RPDResult: ''
    }
  }

  handleInfoUpdate=(_name, _value)=>{
    if (this.state[_name] !== undefined){
      let currentState = this.state;
      currentState[_name] = _value;
      this.setState(currentState);
    }
  }

  handleSave=()=>{

  }

  render(){
    return(
      <View style={{height: '100%', width: '100%'}}>
        <ScrollView
        style={[
          {
            padding:10,
            height:'100%',
            width: '100%'
          },
          ScreenStyle.HeaderPadding]}
        >
          <RPDSectionTitle>Título</RPDSectionTitle>
          <TextInput
          onChangeText={(newValue)=>this.handleInfoUpdate('RPDTitle',newValue)}
          value={this.state.RPDTitle}
          multiline={false}
          numberOfLines={1}
          style={TextStyle.Medium}
          />

          <RPDSectionTitle>Data/Hora</RPDSectionTitle>
          <TextInput
          onChangeText={(newValue)=>this.handleInfoUpdate('RPDTitle',newValue)}
          multiline={false}
          numberOfLines={1}
          style={TextStyle.Medium}
          />
          
          <RPDSectionTitle>Situação</RPDSectionTitle>
          <RPDTextArea onChangeText={(a,b,c)=>console.log(a)}/>

          <RPDSectionTitle>Pensamentos Automáticos</RPDSectionTitle>
          <RPDTextArea/>
          
          <RPDSectionTitle>Emoção</RPDSectionTitle>
          <RPDTextArea/>
          
          <RPDSectionTitle>Conclusão</RPDSectionTitle>
          <RPDTextArea/>
          
          <RPDSectionTitle>Resultado</RPDSectionTitle>
          <RPDTextArea/>

        </ScrollView>
        <Header>
          <View style={{width:'100%',height:'100%', justifyContent:'space-between', flexDirection:'row'}}>
            <Icon
            onPress={()=>this.props.showScreen('RPDList')}
            name={'arrowleft'}
            type={'antdesign'}
            color={'white'}
            size={50}
            />
            <Icon
            onPress={this.handleSave}
            name={'content-save-edit'}
            type={'material-community'}
            size={50}
            />
          </View>
        </Header>
      </View>
    )
  }
}