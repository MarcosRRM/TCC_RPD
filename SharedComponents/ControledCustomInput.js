import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {TextSizes} from '../Styling/SharedStyles';
import {WithThemeContext} from '../Contexts/WithContexts';

@WithThemeContext
export default class ControledCustomInput extends React.Component{
  
  static defaultProps={
    style:{},
    fake:false
  }

  render(){

    let {
      theme,
      style,
      size,
      value,
      placeholder,
      ...props
    } = this.props;

    return (
      this.props.fake?

      <Text
      {...props}
      style={[
        {
          borderBottomWidth:2,
          borderBottomColor: theme.Background.Inverse,
          padding: 0,
          color: !value ? theme.Text.Faded : theme.Text.Primary,
          backgroundColor: '#00000000',
        },
        (TextSizes[size] || TextSizes['Medium']),
        style
      ]}
      >
        {!value?placeholder:value}
      </Text>

      :
      
      <TextInput
      {...props}
      style={[
        {
          borderBottomWidth:2,
          borderBottomColor: theme.Background.Inverse,
          padding: 0,
          color: theme.Text.Primary,
          backgroundColor: '#00000000',
        },
        (TextSizes[size] || TextSizes['Medium']),
        style
      ]}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={theme.Text.Faded}
      />
    );
  }
}