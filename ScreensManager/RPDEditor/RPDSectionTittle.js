import React from 'react';
import {Text} from 'react-native';
import {TextStyle} from '../../Styling/SharedStyles';
import {WithThemeContext} from '../../Contexts/ThemeContext';

@WithThemeContext
export default class RPDSectionTittle extends React.Component{
  render(){
    return(
      <Text style={
        [
          TextStyle.Big,
          {color:this.props.theme.Text.Tittle}
        ]
      }
      >
        {this.props.children}
      </Text>
    );
  }
}