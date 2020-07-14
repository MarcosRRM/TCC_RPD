import React from 'react';
import {LightTheme, DarkTheme} from '../Styling/Colors';
import {ThemeContext} from '../Contexts/ThemeContext';
import AsyncStorage from '@react-native-community/async-storage';

export default class ThemeContextProvider extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      loaded: true,
      isLightTheme: true
    }
  }

  //#region Lifecycle Functions
  async componentDidMount(){
    try{
      item = await AsyncStorage.getItem('Theme');
      this.setState({isLightTheme:JSON.parse(item), loaded:true});

    }
    catch(error){
      console.log('error:', error);
      this.setState({loaded:false},AsyncStorage.setItem('Theme','false'));
    }
  }
  //#endregion

  //#region HANDLERS & Functions
  handleThemeChange = async () => {
    try{
      await AsyncStorage.setItem('Theme', JSON.stringify(!this.state.isLightTheme));
      this.setState({isLightTheme: !this.state.isLightTheme});
    }
    catch (error) {
      console.log('Error Changing Theme: ', error)
    }
  }

  getCurrentTheme = () => this.state.isLightTheme ? LightTheme : DarkTheme;
  //#endregion


  render(){
    return(
      this.state.loaded ?
        <ThemeContext.Provider
        value={{
          changeTheme: this.handleThemeChange,
          isLightTheme: this.state.isLightTheme,
          ...this.getCurrentTheme()
        }}
        >
          {this.props.children}
        </ThemeContext.Provider>
      :
      <></>
    )
  }
}