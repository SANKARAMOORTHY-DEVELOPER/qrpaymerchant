import { ColorTypes } from '@/context/colorTypes';
import { CornerSquareType, DotType } from 'qr-code-styling';
import React, { createContext, useMemo, useReducer } from 'react';

const initialState: IState = {
  style: 'square',
  dotType: 'square',
  background: 'transparent',
  dotColor: '#FFFFFF',
  eyeColor: '#FFFFFF',
  value: "I'm EMPTY",
  logoImage: '',
};

export interface IState {
  style?: CornerSquareType;
  dotType?: DotType;
  background?: ColorTypes['colors'];
  dotColor?: ColorTypes['colors'];
  eyeColor?: ColorTypes['colors'];
  value?: string;
  logoImage: File | string | undefined;
}

type Actions =
  | 'SET_QR_STYLE'
  | 'SET_QR_VALUE'
  | 'SET_QR_DOT_TYPE'
  | 'SET_QR_BACKGROUND'
  | 'SET_QR_DOT_COLOR'
  | 'SET_QR_EYE_COLOR'
  | 'SET_QR_LOGO_IMAGE'
  | `SET_QR_${string}`;
export interface IAction {
  type: Actions;
  payload: {
    style?: CornerSquareType;
    value?: string;
    dotType?: DotType;
    background?: ColorTypes['colors'];
    dotColor?: ColorTypes['colors'];
    eyeColor?: ColorTypes['colors'];
    logoImage?: File | string;
  };
}

export interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

type QrStyleProviderProps = { children: React.ReactNode };

export const QrStyleContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'SET_QR_STYLE':
      return {
        ...state,
        style: action.payload.style,
        dotType: action.payload.dotType,
      };
    case 'SET_QR_VALUE':
      return {
        ...state,
        value: action.payload.value?.slice(0, 1000),
      };
    case 'SET_QR_DOT_TYPE':
      return {
        ...state,
        dotType: action.payload.dotType,
      };
    case 'SET_QR_BACKGROUND':
      return {
        ...state,
        background: action.payload.background,
      };
    case 'SET_QR_DOTCOLOR':
      return {
        ...state,
        dotColor: action.payload.dotColor,
      };
    case 'SET_QR_EYECOLOR':
      return {
        ...state,
        eyeColor: action.payload.eyeColor,
      };
    case 'SET_QR_LOGO_IMAGE':
      return {
        ...state,
        logoImage: action.payload.logoImage,
      };
    default:
      return state;
  }
};

export const QrStyleProvider = ({ children }: QrStyleProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QrStyleContext.Provider value={useMemo(() => ({ state, dispatch }), [state, dispatch])}>
      {children}
    </QrStyleContext.Provider>
  );
};
