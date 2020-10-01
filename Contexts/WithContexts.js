import {withContext, withMultiContext} from 'with-context';
import {
  ModalContext,
  RPDContext,
  ThemeContext
} from './ContextsBase';

export const WithThemeContext     = withContext(ThemeContext, 'theme');
export const WithModalContext     = withContext(ModalContext, 'ModalCtx');
export const WithRPDContext       = withContext(RPDContext,   'RPDCtx');

export const WithThemeAndModalContext = withMultiContext({
  theme: ThemeContext,
  ModalCtx: ModalContext
});

export const WithThemeAndRPDContext = withMultiContext({
  theme: ThemeContext,
  RPDCtx: RPDContext
});

export const WithThemeAndModalAndRPDContext = withMultiContext({
  theme: ThemeContext,
  ModalCtx: ModalContext,
  RPDCtx: RPDContext
});