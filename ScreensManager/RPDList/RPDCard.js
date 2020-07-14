import React from 'react';
import {TouchableHighlight, View, Text, Alert} from 'react-native';
import AppColors from '../../Styling/Colors/AppColors';
import {Icon} from 'react-native-elements';
import {TextSizes} from '../../Styling/SharedStyles';
import { WithRPDnThemeContext } from '../../Contexts/ContextsExport';

@WithRPDnThemeContext
export default class RPDCard extends React.Component{

  handleDeleteRPD = () => {
    Alert.alert(
      'Excluir registro?',
      null,
      [
        {
          text:'Não',
          style:'cancel'
        },
        {
          text:'Sim',
          onPress:()=>this.props.RPDCtx.removeRPD(this.props.rpdData.Id)
        }
      ]
    )
  }

  render(){

    let CardThemeIndex = (this.props.rpdData.Id%this.props.theme.Card.length).toString()

    return(
      <TouchableHighlight onPress={()=>this.props.editorCallback( 'RPDEditor', this.props.rpdData )}>
        <View
        style={{
          borderRadius:5,
          padding: 5,
          flex:1,
          elevation: 2,
          backgroundColor:this.props.theme.Card[CardThemeIndex].Background
        }}
        >
          <Text
          numberOfLines={1}
          style={{
            ...TextSizes.Big,
            flex: 1,
            color:this.props.theme.Card[CardThemeIndex].Foreground
          }}
          >
            {this.props.rpdData.Title}
          </Text>
            
          <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Icon
              name={'calendar-o'}
              color={this.props.theme.Card[CardThemeIndex].Foreground}
              type={'font-awesome'}
              />
              <Text
              numberOfLines={1}
              style={{
                ...TextSizes.Medium,
                marginLeft: 10,
                color: this.props.theme.Card[CardThemeIndex].Foreground
              }}
              >
                {this.props.rpdData.DateTime.toLocaleDateString('pt-BR')}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableHighlight onPress={this.handleDeleteRPD}>
                <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                  backgroundColor: this.props.theme.Button.Danger.Background
                }}
                >
                  <Icon
                  name={'trash'}
                  type={'font-awesome'}
                  iconStyle={{marginLeft:-2}}
                  color={this.props.theme.Button.Danger.Foreground}
                  size={26}
                  onPress={this.handleDeleteRPD}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
