import React from 'react';
import {View, Text, ScrollView, Switch, TouchableHighlight} from 'react-native';
import { WithThemeContext } from '../Contexts/ContextsExport';
import { TextSizes, ScreenStyle } from '../Styling/SharedStyles';
import Header from '../SharedComponents/Header';
import {Icon} from 'react-native-elements';

@WithThemeContext
export default class ConfigScreen extends React.Component{

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
          <View style={{justifyContent:'space-between',alignItems:'center', flexDirection:'row'}}>
            <Text style={[TextSizes.Medium,{color:this.props.theme.Text.Primary}]}>Tema Claro</Text>
            <Switch value={this.props.theme.isLightTheme} onValueChange={this.props.theme.changeTheme}/>
          </View>
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