

import React, {Component} from 'react';
import { SafeAreaView, StyleSheet,View, Text, StatusBar } from 'react-native';
import {Icon} from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component{
  render(){
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Icon/>
        </SafeAreaView>
      </>
    );
  }
};

class DiaryCard extends React.Component{
  render(){
    <View>
      
    </View>
  }
}

const DiaryCardStyle = StyleSheet.create({
  card: {
    backgroundColor: '#F00'
  }
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default App;
