import React from 'react';
import {TextInput} from 'react-native';
import {TextSizes} from '../Styling/SharedStyles';
import {WithThemeContext} from '../Contexts/ContextsExport';

@WithThemeContext
export default class ControledCustomInput extends React.Component{
  
  static defaultProps={
    style:{}
  }

  render(){

    let {
      theme,
      style,
      size,
      ...props
    } = this.props;

    return (
      <TextInput
      {...props}
      style={[
        {
          borderBottomWidth:2,
          borderBottomColor: theme.Background.Primary,
          padding: 0,
          backgroundColor: '#00000000'
        },
        (TextSizes[size] || TextSizes['Medium']),
        style
      ]}
      />
    );
  }
}