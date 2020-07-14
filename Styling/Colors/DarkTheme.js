import AppColors from './AppColors';

export default {
  Background:{
    First: AppColors.Neutral.Black,
    Second: AppColors.Neutral.Dark,
    Inverse: AppColors.Neutral.White
  },
  
  Header:{
    Background: AppColors.Neutral.Light,
    Foreground: AppColors.Green.Darker
  },

  Card:[
    {
      Background: AppColors.Neutral.Dark,
      Foreground: AppColors.Pastel.Purple.Light
    },
    {
      Background: AppColors.Neutral.Dark,
      Foreground: AppColors.Pastel.Green.Light
    },
    {
      Background: AppColors.Neutral.Dark,
      Foreground: AppColors.Pastel.Blue.Light
    },
    {
      Background: AppColors.Neutral.Dark,
      Foreground: AppColors.Pastel.Orange.Light
    },
    {
      Background: AppColors.Neutral.Dark,
      Foreground: AppColors.Pastel.Yellow.Light
    }
  ],

  Editor:{
    Input:[
      {
        Border: AppColors.Neutral.Black,
        Background: AppColors.Neutral.Black,
        Foreground: AppColors.Green.Light,
        Title: AppColors.Pastel.Green.Dark
      },
      {
        Border: AppColors.Neutral.Black,
        Background: AppColors.Neutral.Black,
        Foreground: AppColors.Pastel.Red.Dark,
        Title: AppColors.Pastel.Red.Dark
      },
      {
        Border: AppColors.Neutral.Black,
        Background: AppColors.Neutral.Black,
        Foreground: AppColors.Pastel.Purple.Dark,
        Title: AppColors.Pastel.Purple.Dark
      },
      {
        Border: AppColors.Neutral.Black,
        Background: AppColors.Neutral.Black,
        Foreground: AppColors.Pastel.Orange.Dark,
        Title: AppColors.Pastel.Orange.Dark
      },
      {
        Border: AppColors.Neutral.Black,
        Background: AppColors.Neutral.Black,
        Foreground: AppColors.Pastel.Blue.Dark,
        Title: AppColors.Pastel.Blue.Dark
      },
      {
        Border: AppColors.Neutral.White,
        Background: AppColors.Neutral.Black,
        Foreground: AppColors.Neutral.White,
        Title: AppColors.Neutral.White
      },
    ]
  },

  Text: {
    Primary: AppColors.Neutral.White,
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
    Danger:{
      Background: AppColors.Pastel.Red.Darker,
      Foreground: AppColors.Neutral.White
    },
    Confirm:{
      Border: AppColors.Pastel.Green.Lighter,
      Background: AppColors.Pastel.Green.Dark,
      Foreground: AppColors.Neutral.White
    }

  },

  AddButton:{
    Background: AppColors.Pastel.Blue.Darker,
    Foreground: AppColors.Neutral.White
  },

  ConfigButton:{
    Background: AppColors.Pastel.Purple.Darker,
    Foreground: AppColors.Neutral.White
  },

  Input:{
    Background: AppColors.Neutral.Light
  }
}