import React from 'react';
import {withContext} from 'with-context';

export const ThemeContext = React.createContext();
export const WithThemeContext = withContext(ThemeContext,'theme')