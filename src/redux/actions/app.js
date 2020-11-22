import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from "";

export const fetchAdmins = () => (dispatch) => {
  dispatch({
    type: FETCH,
    payload: null,
  });
  
};

