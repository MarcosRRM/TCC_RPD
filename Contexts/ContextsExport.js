import {withContext, withMultiContext} from 'with-context';
import {RPDContext} from './RPDContext';
import {ThemeContext} from './ThemeContext';

export const WithThemeContext = withContext(ThemeContext,'theme');
export const WithRPDContext = withContext(RPDContext,'RPDCtx');
export const WithRPDnThemeContext = withMultiContext({
  theme: ThemeContext,
  RPDCtx: RPDContext
});