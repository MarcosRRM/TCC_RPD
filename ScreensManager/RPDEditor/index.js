import React from 'react';
import {View, TextInput, ScrollView, DatePickerAndroid, ShadowPropTypesIOS, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextSizes,ScreenStyle} from '../../Styling/SharedStyles';
import Header from '../../SharedComponents/Header';
import RPDTextArea from './RPDTextArea';
import RPDSectionTitle from './RPDSectionTitle';


export default class RPDEditor extends React.Component{

  constructor(props){
    super(props);
    console.log(props)
    this.state={
      RPDTitle: props.title,
      RPDDateTime: new Date(),
      RPDSituation: props.situation,
      RPDAutoThoughts: props.autoThoughts,
      RPDEmotion: props.emotion,
      RPDConclusion: props.conclusion,
      RPDResult: props.result
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
          style={TextSizes.Medium}
          />

          <RPDSectionTitle>Data/Hora</RPDSectionTitle>
          <TextInput
          value={this.state.RPDDateTime.toDateString()}
          editable={false}
          multiline={false}
          numberOfLines={1}
          style={TextSizes.Medium}
          />
          
          <RPDSectionTitle>Situação</RPDSectionTitle>
          <RPDTextArea value={this.state.RPDSituation}/>

          <RPDSectionTitle>Pensamentos Automáticos</RPDSectionTitle>
          <RPDTextArea value={this.state.RPDAutoThoughts}/>
          
          <RPDSectionTitle>Emoção</RPDSectionTitle>
          <RPDTextArea value={this.state.RPDEmotion}/>
          
          <RPDSectionTitle>Conclusão</RPDSectionTitle>
          <RPDTextArea value={this.state.RPDConclusion}/>
          
          <RPDSectionTitle>Resultado</RPDSectionTitle>
          <RPDTextArea value={this.state.RPDResult}/>

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