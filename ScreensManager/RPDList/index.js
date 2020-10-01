import React from 'react';
import {FlatList, View, Text} from 'react-native';
import RPDCard from './RPDCard';
import { WithThemeAndRPDContext } from '../../Contexts/WithContexts';
import {Icon} from 'react-native-elements';

@WithThemeAndRPDContext
export default class RPDList extends React.Component{

  async componentDidMount(){
    if (!this.props.RPDCtx.CheckedCloud){
      await this.props.RPDCtx.loadCloud();
    }
  }

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
        {this.props.RPDCtx.RPDList.length>0 ?
          <FlatList
          data={this.props.RPDCtx.RPDList}
          style={{width:'90%',marginRight:'auto', marginLeft:'auto'}}
          renderItem={({item,index})=>{
            return(
              <RPDCard
              rpdData = {item}
              localIndex={index}
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
  size={30}
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
  size={30}
  containerStyle={{
    position:'absolute',
    bottom:10,
    left:10
  }}
  />
;