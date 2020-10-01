import AsyncStorage from '@react-native-community/async-storage';

export default {
  JwtToken: '',
  Authenticated: false,

  async getJwtToken() {
    if (!this.JwtToken) { await this.recoverJwtFromStorage(); }
    return this.JwtToken;
  },

  async recoverJwtFromStorage() {
    this.JwtToken = await AsyncStorage.getItem('JWTToken') || '';
  },

  async setJwtToken(token) {
    await AsyncStorage.setItem('JWTToken',token)
    this.JwtToken = token;
  },

  async clear(clearStorage=false){
    this.JwtToken='';
    this.Authenticated=false;
    AsyncStorage.removeItem('JWTToken');
  }
}