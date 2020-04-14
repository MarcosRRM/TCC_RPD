import React from 'react';
import {TextInput} from 'react-native';
import {WithThemeContext} from '../../Contexts/ThemeContext';
import {TextStyle} from '../../Styling/SharedStyles';

@WithThemeContext
export default class RPDTextArea extends React.Component {

  render(){

    let _style = {
      borderWidth: 1,
      backgroundColor: this.props.theme.Input.Background,
      textAlignVertical: 'top'
    } 

    return(
      <TextInput
      style={
        [ 
          TextStyle.Medium,
          _style
        ]
      }
      multiline={true}
      numberOfLines={5}
      {...this.props}
      />
    );
  }
}