import { newsLetter } from "../constants/newsletterContants";

export const newSubscriberReducer = (state = { newsletter: {} }, action) => {
  switch (action.type) {
    case newsLetter.CREATE_SUBSCRIBER_REQUEST:
      return {
        loading: true,
      };
    case newsLetter.CREATE_SUBSCRIBER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        newsletter: action.payload,
      };
    case newsLetter.CREATE_SUBSCRIBER_FAIL:
      return {
        ...state,
        loading: false,
        newsletter: null,
        error: action.payload,
      };
    case newsLetter.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
