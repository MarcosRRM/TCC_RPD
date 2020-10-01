import React from 'react';
import {View,Text, ActivityIndicator} from 'react-native'; 
import {ModalStyle,TextSizes} from '../../../Styling/SharedStyles';
import {WithThemeContext} from '../../../Contexts/WithContexts';

@WithThemeContext
export default class LoadingModal extends React.Component {

  static defaultProps ={
    showText     : true,
    message      : 'Carregando...',
    containProps : {},
    textProps    : {},
    actProps     : {}
  }

  render(){

    return(
      <View
      style={[
        ModalStyle,
        { backgroundColor: this.props.theme.Background.Second }
      ]}
      {...this.props.containProps}
      >
        
        {this.props.showText &&
          <Text
          style={[
            {
              alignSelf:'center',
              color: this.props.theme.Text.Primary
            },
            TextSizes.Medium
          ]}
          {...this.props.textProps}
          >
            {this.props.message}
          </Text>
        }
        
        <ActivityIndicator onTouchStart={()=>this.props.showModal()} size={'large'} style={{marginTop: 10}} {...this.props.actProps}/>
      </View>
    );
  }

}