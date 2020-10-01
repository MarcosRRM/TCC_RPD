import React from 'react';
import {TouchableHighlight, View, Text, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {TextSizes} from '../../Styling/SharedStyles';
import { WithThemeAndModalAndRPDContext } from '../../Contexts/WithContexts';

@WithThemeAndModalAndRPDContext
export default class RPDCard extends React.Component{

  handleDeleteRPD = () => {
    Alert.alert(
      'Excluir registro?',
      null,
      [
        {
          text:'Não',
          style:'cancel'
        },
        {
          text:'Sim',
          onPress:()=>{
            this.props.RPDCtx.removeRPD(this.props.localIndex);
            this.props.ModalCtx.showModal('Loading',{message:'Sincronizando...'})
            this.props.RPDCtx.syncRequest()
            .then(()=>{
              this.props.ModalCtx.showModal();
            })
            .catch(()=>{
              Alert.alert('Falha ao sincronizar.','Cheque a sua conexão de internet.\nVocê pode tentar sincronizar novamente através do menu de configurações.');
            })
          }
        }
      ]
    )
  }

  render(){

    console.log(this.props.rpdData);

    let CardThemeIndex = (this.props.localIndex%this.props.theme.Card.length).toString()

    return(
      <TouchableHighlight onPress={()=>this.props.editorCallback( 'RPDEditor', {...this.props.rpdData, localIndex:this.props.localIndex} )}>
        <View
        style={{
          borderRadius:5,
          padding: 5,
          flex:1,
          elevation: 2,
          backgroundColor:this.props.theme.Card[CardThemeIndex].Background
        }}
        >
          <Text
          numberOfLines={1}
          style={{
            ...TextSizes.Big,
            color:this.props.theme.Card[CardThemeIndex].Foreground
          }}
          >
            {this.props.rpdData.Title}
          </Text>

          <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Icon
              name={'calendar-o'}
              color={this.props.theme.Card[CardThemeIndex].Foreground}
              type={'font-awesome'}
              />
              <Text
              numberOfLines={1}
              style={{
                ...TextSizes.Medium,
                marginLeft: 10,
                color: this.props.theme.Card[CardThemeIndex].Foreground
              }}
              >
                {this.props.rpdData.DateTime.toLocaleDateString('pt-BR')}
              </Text>

              <Text
              numberOfLines={1}
              style={{
                ...TextSizes.Medium,
                marginLeft: 15,
                color: this.props.theme.Card[CardThemeIndex].Foreground
              }}
              >
                Sincro.:
              </Text>
              <Icon
              size={20}
              iconStyle={{marginLeft:5}}
              name={ this.props.rpdData.LastUpdate < this.props.RPDCtx.LastSynced ? 'check':'remove'
              }
              color={this.props.theme.Card[CardThemeIndex].Foreground}
              type={'font-awesome'}
              />
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableHighlight onPress={this.handleDeleteRPD}>
                <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                  backgroundColor: this.props.theme.Button.Danger.Background
                }}
                >
                  <Icon
                  name={'trash'}
                  type={'font-awesome'}
                  iconStyle={{marginLeft:-2}}
                  color={this.props.theme.Button.Danger.Foreground}
                  size={26}
                  onPress={this.handleDeleteRPD}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}
