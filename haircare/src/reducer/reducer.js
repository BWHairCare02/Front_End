import {
  LOCATION_CUSTOMER,
  USERNAME_CUSTOMER,
  MAKE_CUSTOMER,
  PASSWORD_CUSTOMER,
  STYLIST,
  NOT_STYLIST,
  DESCRIPTION,
  // EMAIL_CUSTOMER,
  LOAD_CUSTOMER_SUCCESS,
  LOAD_CUSTOMER_FAILURE,
  LOADING_CUSTOMER,
  SIGNUP_PASSWORD,
  SIGNUP_USERNAME,
  STYLIST_USER,
  STYLIST_PASS,
  LOAD_STYLIST_SUCCESS,
  LOADING_STYLIST,
  LOAD_STYLIST_FAILURE
} from "../actions";

const initialState = {
  costumers: [
    //{"username":"skye","location":California,"email":"skyet@gmail.com","id":1234}
  ],
  isFetching: false,
  error: null,
  ///////////USER
  location: "",
  email: "",
  signupUsername: "",
  signupPassword: "",
  //  Stylist
  userInput: {
    username: "",
    password: "",
    description: " "
  }
};
//   success: false,

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: action.payload,

        isFetching: false,
        error: null
      };
    // case SUCCESS:
    //   return {
    //     ...state,
    //     success: true
    //   };
    case LOAD_CUSTOMER_FAILURE:
      return {
        ...state,
        customers: [...state.customers],
        isFetching: false,
        error: action.payload
      };
    case LOADING_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers],
        isFetching: true,
        error: null
      };
    case LOCATION_CUSTOMER:
      return {
        ...state,
        city: action.payload
      };
    case USERNAME_CUSTOMER:
      return {
        ...state,
        userInput: {
          username: action.payload,
          password: state.userInput.password
        }
      };
    case MAKE_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers].concat(action.payload),
        isFetching: false,
        error: null
      };

    case PASSWORD_CUSTOMER:
      return {
        ...state,
        userInput: {
          username: state.userInput.username,
          password: action.payload
        }
      };
    case SIGNUP_USERNAME:
      return {
        ...state,
        signupUsername: action.payload
      };
    case SIGNUP_PASSWORD:
      return {
        ...state,
        signupPassword: action.payload
      };
    case DESCRIPTION:
      return {
        ...state,
        description: action.payload
      };

    ////////////////////////// STYLIST////////////////////////////////

    case STYLIST_PASS:
      return {
        ...state,
        stylistInputBoard: {
          username: state.stylistInput.username,
          password: action.payload
        }
      };

    case STYLIST_USER:
      return {
        ...state,
        stylistInputBoard: {
          username: action.payload,
          password: state.stylistInput.password
        }
      };

    case NOT_STYLIST:
      return {
        ...state,
        admin: false
      };
    case STYLIST:
      return {
        ...state,
        admin: true
      };

    case LOAD_STYLIST_SUCCESS:
      return {
        ...state,
        userInput: action.payload,
        isFetching: false,
        error: null
      };
    case LOAD_STYLIST_FAILURE:
      return {
        ...state,
        userInput: { ...state.userInput },
        isFetching: false,
        error: action.payload
      };
    case LOADING_STYLIST:
      return {
        ...state,
        userInput: { ...state.userInput },
        isFetching: true,
        error: null
      };

    default:
      return state;
  }
}
