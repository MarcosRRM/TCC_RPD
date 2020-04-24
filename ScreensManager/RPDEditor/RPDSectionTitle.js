import React from 'react';
import {Text} from 'react-native';
import {TextSizes} from '../../Styling/SharedStyles';
import {WithThemeContext} from '../../Contexts/ThemeContext';

@WithThemeContext
export default class RPDSectionTitle extends React.Component{
  render(){
    return(
      <Text style={
        [
          TextSizes.Big,
          {color:this.props.theme.Text.Title}
        ]
      }
      >
        {this.props.children}
      </Text>
    );
  }
}