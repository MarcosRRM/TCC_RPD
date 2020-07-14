import AppColors from './AppColors';

export default {
  Background:{
    First: AppColors.Neutral.Light,
    Second: AppColors.Neutral.White,
    Inverse: AppColors.Neutral.Dark
  },
  
  Header:{
    Background: AppColors.Neutral.Light,
    Foreground: AppColors.Green.Darker
  },

  Card:[
    {
      Background: AppColors.Pastel.Purple.Neutral,
      Foreground: AppColors.Neutral.White
    },
    {
      Background: AppColors.Pastel.Green.Neutral,
      Foreground: AppColors.Neutral.White
    },
    {
      Background: AppColors.Pastel.Blue.Neutral,
      Foreground: AppColors.Neutral.White
    },
    {
      Background: AppColors.Pastel.Orange.Neutral,
      Foreground: AppColors.Neutral.White
    },
    {
      Background: AppColors.Pastel.Yellow.Dark,
      Foreground: AppColors.Neutral.White
    }
  ],

  Editor:{
    Input:[
      {
        Border: AppColors.Pastel.Green.Darker,
        Background: AppColors.Pastel.Green.Dark,
        Foreground: AppColors.Neutral.White,
        Title: AppColors.Pastel.Green.Dark
      },
      {
        Border: AppColors.Pastel.Red.Darker,
        Background: AppColors.Pastel.Red.Dark,
        Foreground: AppColors.Neutral.White,
        Title: AppColors.Pastel.Red.Darker
      },
      {
        Border: AppColors.Pastel.Purple.Darker,
        Background: AppColors.Pastel.Purple.Dark,
        Foreground: AppColors.Neutral.White,
        Title: AppColors.Pastel.Green.Dark
      },
      {
        Border: AppColors.Pastel.Orange.Darker,
        Background: AppColors.Pastel.Orange.Dark,
        Foreground: AppColors.Neutral.White,
        Title: AppColors.Pastel.Orange.Darker
      },
      {
        Border: AppColors.Pastel.Blue.Darker,
        Background: AppColors.Pastel.Blue.Dark,
        Foreground: AppColors.Neutral.White,
        Title: AppColors.Pastel.Blue.Dark
      },
      {
        Border: AppColors.Neutral.Dark,
        Background: AppColors.Neutral.Dark,
        Foreground: AppColors.Neutral.White,
        Title: AppColors.Neutral.Dark
      },
    ]
  },

  Text: {
    Primary: AppColors.Neutral.Dark,
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