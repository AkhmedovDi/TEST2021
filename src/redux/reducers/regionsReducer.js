import * as actions from '../actions/regions';

const initialState = {
  data: [],
  loading: false,
  err: null,
};

const regionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGIONS_START:
      return {
        data: [],
        loading: true,
        err: null,
      };
    case actions.REGIONS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        err: null,
      };
    case actions.REGIONS_ERROR:
      return {
        data: [],
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export default regionsReducer;
