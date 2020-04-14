import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextStyle} from '../../Styling/SharedStyles';
import { WithThemeContext } from '../../Contexts/ThemeContext';

@WithThemeContext
export default class RPDCard extends React.Component{

  render(){
    return(
      <TouchableHighlight onPress={()=>this.props.editorCallback( 'RPDEditor', this.props.rpdData )}>
        <View
        style={{
          borderRadius:5,
          padding: 5,
          flex:1,
          backgroundColor:this.props.theme.Card.Background
        }}
        >
          <Text
          numberOfLines={1}
          style={{
            ...TextStyle.Big,
            flex: 1,
            color:this.props.theme.Text.Inverted
          }}
          >
            {this.props.rpdData.tittle}
          </Text>
            
          <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Icon
              name={'calendar-o'}
              color={'#FFF'}
              type={'font-awesome'}
              
              />
              <Text
              numberOfLines={1}
              style={{
                ...TextStyle.Medium,
                marginLeft: 10,
                color:this.props.theme.Text.Inverted
              }}
              >
                {this.props.rpdData.date.toLocaleDateString('PTbr')}
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableHighlight>
                <Icon
                name={'trash'}
                type={'font-awesome'}
                color={'#FFF'}
                size={32}
                />
              </TouchableHighlight>
              <View style={{width:30}}/>
              <TouchableHighlight>
                <Icon
                name={'edit'}
                type={'font-awesome'}
                color={'#FFF'}
                size={32}
                />
              </TouchableHighlight>  
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
