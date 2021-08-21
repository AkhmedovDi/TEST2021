const CHANGE_LANG = 'CHANGE_LANG';

const initialState = 'uz';

const langReducer = (state = initialState, action) => {
  if (action.type === CHANGE_LANG) {
    return action.payload || 'uz';
  }

  return state;
};

export default langReducer;
