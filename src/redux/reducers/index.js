import { combineReducers } from 'redux';
import langReducer from './langReducer';
import mobileMenuReducer from './mobileMenuReducer';
import regionsReducer from './regionsReducer';

const rootReducer = combineReducers({
  regions: regionsReducer,
  lang: langReducer,
  mobileMenu: mobileMenuReducer,
});

export default rootReducer;
