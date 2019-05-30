import { AUTH_SUCCESS } from 'actions';

const initialState = {
  username: '',
  password: '',
  role: '',
  isAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        role: action.payload.role,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default rootReducer;
