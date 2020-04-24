import React from 'react';
import {View} from 'react-native';
import { WithThemeContext } from '../../Contexts/ThemeContext';

@WithThemeContext
export default class RPDInputGroup extends React.Component{
  render(){
    return(
      <View
      style={[{
        borderRadius: 5,
        backgroundColor:'#DDD',
        padding:5,
        marginBottom: 8
      }]}>
        {this.props.children}
      </View>
    );
  }
}