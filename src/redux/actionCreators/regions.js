import {
  getAllRegions as __getAllRegions,
  getLocations,
} from '../../api/regions';
import * as actions from '../actions/regions';

export const getAllRegions = () => {
  return async (dispatch) => {
    dispatch({
      type: actions.REGIONS_START,
    });

    await __getAllRegions()
      .then((res) => {
        getLocations(res.data.viloyat).then((res) => {
          dispatch({
            type: actions.REGIONS_SUCCESS,
            payload: res,
          });
        });
      })
      .catch((err) => {
        dispatch({
          type: actions.REGIONS_ERROR,
          payload: err.toString(),
        });
      });
  };
};
