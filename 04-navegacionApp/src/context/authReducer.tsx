import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'setFavoriteIcon'; payload: string }
  | { type: 'setUsername'; payload: string };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'setFavoriteIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'setUsername':
      return {
        ...state,
        username: action.payload,
      };
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };
    default:
      return state;
  }
};
