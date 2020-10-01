import React from 'react';
import {Modal,View} from 'react-native';
import {ModalContext} from '../../Contexts/ContextsBase';
import LoadingModal from './Modals/LoadingModal';

const ModalList = [
  {name: 'Loading', component: <LoadingModal/>}
];

export default class ModalContextProvider extends React.Component {

  state={
    SelfProps: {},
    CurrentModalIndex: -1,
    CurrentModalProps: {}
  }

  showModalHandler = (modalName='',modalProps={},controllerProps={}) => {
    this.setState({
      SelfProps: controllerProps,
      CurrentModalIndex  : ModalList.findIndex(m=>m.name===modalName),
      CurrentModalProps : modalProps
    })
  }

  render(){

    return(
      <ModalContext.Provider value={{
        showModal: this.showModalHandler
      }}>
        <Modal
        transparent
        animationType={'fade'}
        visible={this.state.CurrentModalIndex>=0}
        {...this.state.SelfProps}
        >
          <View style={{flex:1,justifyContent:'center',backgroundColor:'#00000030'}}>
          {this.state.CurrentModalIndex>=0 &&
            React.cloneElement(
              ModalList[this.state.CurrentModalIndex].component,
              {showModal:this.showModalHandler,...this.state.CurrentModalProps}
            )
          }
          </View>
        </Modal>
        {this.props.children}
      </ModalContext.Provider>
    );
  }

}