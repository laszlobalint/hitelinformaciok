import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE_INITIALIZED:
      return updateObject(state, { error: null, loading: true });
    case actionTypes.AUTHENTICATE_SUCCESS:
      return updateObject(state, { token: action.token, userId: action.userId, error: null, loading: false });
    case actionTypes.AUTHENTICATE_FAILURE:
      return updateObject(state, { error: action.error, loading: false });
    case actionTypes.AUTHENTICATE_LOGOUT:
      return updateObject(state, { token: null, userId: null });
    default:
      return state;
  }
};

export default reducer;
