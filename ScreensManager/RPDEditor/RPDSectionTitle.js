import React from 'react';
import {Text} from 'react-native';
import {TextSizes} from '../../Styling/SharedStyles';
import {WithThemeContext} from '../../Contexts/ContextsExport';

@WithThemeContext
export default class RPDSectionTitle extends React.Component{
  render(){
    return(
      <Text style={
        [
          TextSizes.Big,
          {color:this.props.theme.Editor.Input[this.props.themeIndex].Title}
        ]
      }
      >
        {this.props.children}
      </Text>
    );
  }
}