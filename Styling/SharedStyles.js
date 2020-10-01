import {Modal, StyleSheet} from 'react-native';

const TextSizes = {
  Small:{
    lineHeight:18,
    fontSize:16
  },
  Medium:{
    lineHeight:22,
    fontSize:20
  },
  Big:{
    lineHeight:28,
    fontSize:26
  }
};

const ScreenStyle = {
  HeaderHeight: 60
}

const ModalStyle = {
  alignSelf:'center',
  maxWidth: '80%',
  height: 100,
  borderRadius: 8,
  padding: 10,
  elevation: 6
}

export {
  TextSizes,
  ScreenStyle,
  ModalStyle
}