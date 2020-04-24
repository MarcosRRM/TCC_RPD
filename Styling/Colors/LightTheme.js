import AppColors from './AppColors';

export default {
  Background:{
    First: AppColors.Neutral.White,
    Second: AppColors.Neutral.Light,
    Inverse: AppColors.Neutral.Dark
  },
  
  Header:{
    Background: AppColors.Neutral.Light,
    Foreground: AppColors.Green.Darker
  },

  Card:{
    Background: AppColors.Green.Light
  },

  Text: {
    Primary: AppColors.Neutral.Black,
    Secundary: AppColors.Neutral.Dark,
    Inverted: AppColors.Neutral.White,
    Title: AppColors.Green.Regular
  },

  Button:{
    Basic:{
      Border: AppColors.Neutral.Regular,
      Background:  AppColors.Neutral.Light,
      Foreground: AppColors.Neutral.Dark
    },
    Alert:{

    },
    Danger:{

    },
    Confirm:{
      Border: AppColors.Green.Lighter,
      Background: AppColors.Green.Light,
      Foreground: AppColors.Neutral.White
    }

  },

  Input:{
    Background: AppColors.Neutral.Light
  }
}