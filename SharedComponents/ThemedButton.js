import React from 'react';
import {WithThemeContext} from '../Contexts/WithContexts';
import {TextSizes} from '../Styling/SharedStyles';
import { TouchableHighlight, Text } from 'react-native';

@WithThemeContext
export default class ThemedButton extends React.Component{
  
  static defaultProps = {
    title: 'Button',
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
      title,
      textStyle,
      size,
      ..._props
    } = this.props;
    
    return(
      <TouchableHighlight
      {..._props}
      style={[{
        width: '50%',
        padding: 6,
        borderRadius: 100,
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
          {title}
        </Text>
      </TouchableHighlight>
    );
  }
}