import React from 'react';
import {withContext} from 'with-context';

export const RPDContext = React.createContext();
export const WithRPDContext = withContext(RPDContext,'RPDCtx');