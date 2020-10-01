import React from 'react';
import {TextInput} from 'react-native';
import {WithThemeContext} from '../../Contexts/WithContexts';
import {TextSizes} from '../../Styling/SharedStyles';

@WithThemeContext
export default class RPDTextArea extends React.Component {

  static defaultProps={themeIndex:2}

  render(){
    return(
      <TextInput
      style={
        [ 
          TextSizes.Medium,
          {
            borderWidth: 1,
            borderColor: this.props.theme.Editor.Input[this.props.themeIndex].Border,
            backgroundColor: this.props.theme.Editor.Input[this.props.themeIndex].Background,
            color: this.props.theme.Editor.Input[this.props.themeIndex].Foreground,
            padding: 5,
            textAlignVertical: 'top'
          } 
        ]
      }
      onChangeText={this.props.onChangeText}
      multiline={true}
      numberOfLines={5}
      {...this.props}
      />
    );
  }
}