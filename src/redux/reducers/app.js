export const FETCH = "FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";

export const INITIAL_STATE = {
  admin: null,
  loading: false,
  error: {
    flag: false,
    msg: null,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        admin: action.payload,
        loading: false,
      };
    case FETCH_FAILED:
      return {
        ...state,
        admin: null,
        loading: false,
        error: {
          flag: true,
          msg: action.payload,
        },
      };
    default:
      return state;
  }
};
