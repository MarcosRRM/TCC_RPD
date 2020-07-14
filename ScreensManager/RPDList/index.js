import React from 'react';
import {FlatList, View, Text, TouchableHighlight} from 'react-native';
import RPDCard from './RPDCard';
import { WithRPDnThemeContext } from '../../Contexts/ContextsExport';
import {Icon} from 'react-native-elements';

@WithRPDnThemeContext
export default class RPDList extends React.Component{
  
  render(){

    return (
      <View
      style={{
        width:'100%',
        height:'100%',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:this.props.theme.Background.First
      }}
      >
        {this.props.RPDCtx.list.length>0 ?
          <FlatList
          data={this.props.RPDCtx.list}
          style={{width:'90%',marginRight:'auto', marginLeft:'auto'}}
          renderItem={({item})=>{
            return(
              <RPDCard
              rpdData = {item}
              editorCallback={this.props.showScreen}
              />
            ); 
          }}
          keyExtractor={(_,index)=>index.toString()}
          ItemSeparatorComponent={()=><View style={{flex:1, height: 10}}/>}
          />
          :
          <Text
          style={{
            color:this.props.theme.Background.Inverse,
            width: '100%',
            textAlign: 'center',
            fontSize: 20
          }}
          >
            Sem registros
          </Text>
        }
        <AddButton theme={this.props.theme} showScreen={this.props.showScreen}/>
        <ConfigButton theme={this.props.theme} showScreen={this.props.showScreen}/>
      </View>
    );
  }
};

const AddButton = (props) =>
  <Icon
  onPress={()=>props.showScreen('RPDEditor')}
  name={'plus'}
  type={'font-awesome'}
  reverse
  color={props.theme.AddButton.Background}
  size={40}
  containerStyle={{
    position:'absolute',
    bottom:10,
    right:10,
  }}
  />
;

const ConfigButton = (props) =>
  <Icon
  onPress={()=>props.showScreen('ConfigScreen')}
  name={'cog'}
  type={'font-awesome'}
  reverse
  color={props.theme.ConfigButton.Background}
  size={40}
  containerStyle={{
    position:'absolute',
    bottom:10,
    left:10
  }}
  />
;