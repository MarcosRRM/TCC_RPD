import React from 'react';
import {FlatList, View} from 'react-native';
import RPDCard from './RPDCard';
import { WithRPDContext } from '../../Contexts/RPDContext';

@WithRPDContext
export default class RPDList extends React.Component{
  render(){
    return (
      <>
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
        ItemSeparatorComponent={separator}
        />
      </>
    );
  }
};

const separator = () => <View style={{flex:1, height: 10}}/>