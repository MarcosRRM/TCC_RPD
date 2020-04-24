import React from 'react';
import {WithThemeContext} from '../Contexts/ThemeContext';
import {TextSizes} from '../Styling/SharedStyles';
import { TouchableHighlight, Text } from 'react-native';

@WithThemeContext
export default class ThemedButton extends React.Component{
  
  static defaultProps = {
    tittle: 'Button',
    onPress: ()=>{},
    type: 'Basic',
    style: {},
    textStyle: {},
    size: 'Medium'
  }

  render(){
    
    let {
      type,
      theme,
      style,
      tittle,
      textStyle,
      size,
      ..._props
    } = this.props;
    
    return(
      <TouchableHighlight
      {..._props}
      style={[{
        width: '50%',
        padding: 5,
        borderRadius: 100,
        borderWidth: 2,
        borderColor:  (theme.Button[type] || theme.Button['Basic']).Border,
        backgroundColor: (theme.Button[type] || theme.Button['Basic']).Background
      },
      style
      ]}
      >
        <Text
        style={[
          {
            textAlign: 'center',
            color: (theme.Button[type] || theme.Button['Basic']).Foreground,
          },
          (TextSizes[size] || TextSizes['Medium']),
          textStyle
        ]}
        >
          {_props.title}
        </Text>
      </TouchableHighlight>
    );
  }
}