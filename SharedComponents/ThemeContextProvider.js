import React from 'react';
import {LightTheme, DarkTheme} from '../Styling/Colors';
import ThemeContext from '../Contexts/ThemeContext';

export default class ThemeContextProvider extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isLightTheme: true
    }
  }

  //#region HANDLERS & Functions
  handleThemeChange = () => {
    this.setState({isLightTheme: !this.state.isLightTheme})
  }

  //#endregion


  render(){
    return(
      <ThemeContext.Provider
      value={{
        changeTheme:this.handleThemeChange,
        ...(this.state.isLightTheme ? LightTheme : DarkTheme)
      }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}