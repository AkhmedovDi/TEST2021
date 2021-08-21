const SHOW_MENU = 'SHOW_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

const initialState = false;

const mobileMenuReducer = (state = initialState, action) => {
  if (action.type === CLOSE_MENU) {
    return false;
  }
  if (action.type === SHOW_MENU) {
    return true;
  }

  return state;
};

export default mobileMenuReducer;
