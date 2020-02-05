import axios from "axios";
import axiosWithAuth from "../axios/axiosAuth";

//////////////////////////// SIGNUP /////////////////////////////////////////////////
export const SIGNUP_USERNAME = "SIGNUP_USERNAME";
export const SIGNUP_PASSWORD = "SIGNUP_PASSWORD";
export const signupUser = data => ({ type: SIGNUP_USERNAME, payload: data });
export const signupPass = data => ({ type: SIGNUP_PASSWORD, payload: data });

export const MAKE_CUSTOMER = "MAKE_CUSTOMER";
export const customerMaking = data => ({ type: MAKE_CUSTOMER, payload: data });

/////////////////////////// COSTUMERS/////////////////////////////////////////

export const LOCATION_CUSTOMER = "LOCATION_CUSTOMER";
export const customerLocation = data => ({
  type: LOCATION_CUSTOMER,
  payload: data
});
export const USERNAME_CUSTOMER = "USERNAME_CUSTOMER";
export const customerUserName = data => ({
  type: USERNAME_CUSTOMER,
  payload: data
});
export const EMAIL_CUSTOMER = "EMAIL_CUSTOMER";
export const customerEmail = data => ({ type: EMAIL_CUSTOMER, payload: data });
export const PASSWORD_CUSTOMER = "PASSWORD_CUSTOMER";
export const customerPassWord = data => ({
  type: PASSWORD_CUSTOMER,
  payload: data
});

export const LOAD_CUSTOMER_SUCCESS = "LOAD_CUSTOMER_SUCCESS";

export const LOAD_CUSTOMER_FAILURE = "LOAD_CUSTOMER_FAILURE";

export const LOADING_CUSTOMER = "LOADING_CUSTOMER";
export const customerSuccess = data => ({
  type: LOAD_CUSTOMER_SUCCESS,
  payload: data
});

export const customerFailure = error => ({
  type: LOAD_CUSTOMER_FAILURE,
  payload: error
});

export const customerLoading = () => ({ type: LOADING_CUSTOMER });

export const SUCCESS = "SUCCESS";
export const successLoad = () => ({ type: SUCCESS });

const authAxios = axiosWithAuth();

export const fetchCustomers = () => dispatch => {
  dispatch(customerLoading());
  authAxios
    //   fix users below
    .get("/customer/:customerId")
    .then(res => {
      console.log("this is customers response.data", res);
      dispatch(customerSuccess(res.data));
      //successload()
    })
    .catch(error => {
      console.log("this is error", error.message);
      dispatch(customerFailure(error.message));
    });
};

export const postCustomer = (
  locationCustomer,
  emailCustomer,
  signupUsername,
  signupPassword
) => dispatch => {
  dispatch(customerLoading());
  authAxios
    .post("/customer/register", {
      state: locationCustomer,
      email: emailCustomer,
      username: signupUsername,
      password: signupPassword
    })
    .then(res => {
      console.log("this is postCustomer response.data", res);
      // dispatch(customerMaking(res.data))
      //successLoad()
    })
    .catch(error => {
      console.log("this is error", error.message);
      //dispatch(customerFailure(error.message))
    });
};
export const putCustomer = (
  locationCustomer,
  emailCustomer,
  signupUsername,
  signupPassword,
  id
) => dispatch => {
  dispatch(customerLoading());
  authAxios
    .post(`https://haircare-backend-dingo.herokuapp.com/customer/login${id} `, {
      state: locationCustomer,
      email: emailCustomer,
      username: signupUsername,
      password: signupPassword
    })
    .then(res => {
      console.log("this is putCustomer response.data", res);
      // dispatch(costumerMaking(res.data))
      //successLoad()
    })
    .catch(error => {
      console.log("this is error", error.message);
      //dispatch(customerFailure(error.message))
    });
};

///////////////// UPDATES/////////////////////////////////////////////////////////////////

export const updateLocation = location => dispatch => {
  dispatch(customerLocation(location));
};

export const updateEmail = email => dispatch => {
  dispatch(customerEmail(email));
};

export const updateUserName = username => dispatch => {
  dispatch(customerUserName(username));
};
export const updatePassWord = password => dispatch => {
  dispatch(customerPassWord(password));
};

////////////////// SIGNUP UPDATES ///////////////////////////////////////////////////////
export const updateSignupUser = data => dispatch => {
  dispatch(signupUser(data));
};
export const updateSignupPass = data => dispatch => {
  dispatch(signupPass(data));
};
// //////DESCRIPTIONS ///////// BOTH//////////////////////////////////////////////////////
export const description = data => ({ type: DESCRIPTION, payload: data });
export const DESCRIPTION = "DESCRIPTION";
// export const updateLocation = data => dispatch => {
//   dispatch(costumerLocation(data));
// };
//////////////////////// STYLIST ////////////////////////////////////////////////////////
export const stylistUser = data => ({ type: STYLIST_USER, payload: data });
export const stylistPass = data => ({ type: STYLIST_PASS, payload: data });
export const STYLIST_PASS = "STYLIST_PASS";
export const STYLIST_USER = "STYLIST_USER";

export const NOT_STYLIST = "NOT_STYLIST";

export const STYLIST = "STYLIST";
export const customer = () => ({ type: NOT_STYLIST });

export const stylist = () => ({ type: STYLIST });

export const stylistFalse = () => dispatch => {
  dispatch(customer());
};

export const stylistTrue = () => dispatch => {
  dispatch(stylist());
};

/////////////////UPDATE STYLIST//////////////////////////////////////////////////////////////
export const updateStylistPass = password => dispatch => {
  dispatch(stylistPass(password));
};
export const updateStylistUser = username => dispatch => {
  dispatch(stylistUser(username));
};

///////////////////////// Stylist Info//////////////////////////////////////////////////////////
export const LOAD_STYLIST_SUCCESS = "LOAD_STYLIST_SUCCESS";

export const LOAD_STYLIST_FAILURE = "LOAD_STYLIST_FAILURE";
export const LOADING_STYLIST = "LOADING_STYLIST";

export const stylistSuccess = data => ({
  type: LOAD_STYLIST_SUCCESS,
  payload: data
});
export const stylistFailure = error => ({
  type: LOAD_STYLIST_FAILURE,
  payload: error
});
export const stylistLoading = () => ({ type: LOADING_STYLIST });
export const fetchStylist = () => dispatch => {
  authAxios
    .get("/stylist")
    .then(res => {
      console.log("this is response.data", res);
      dispatch(stylistSuccess(res.data));
    })
    .catch(error => {
      console.log("this is error", error.message);
      dispatch(stylistFailure(error.message));
    });
};

export const postStylist = (username, password, description) => dispatch => {
  dispatch(stylistLoading());

  authAxios
    .post("/stylist/register", {
      STYLIST_USER: username,
      STYLIST_PASS: password,
      DESCRIPTION: description
    })
    .then(res => {
      console.log("this is postStylist response.data", res);

      //successLoad()
    })
    .catch(error => {
      console.log("this is error", error.message);
    });
};

export const putStylist = (username, password, description, id) => dispatch => {
  dispatch(stylistLoading());

  authAxios
    .put(
      `/stylist/:stylistId${id}`, ///ENTER THE SPECIFIC ID?
      {
        about: description,
        STYLIST_USER: username,
        STYLIST_PASS: password
      }
    )
    .then(res => {
      console.log("this is putStylist response", res);

      //successLoad()
    })
    .catch(error => {
      console.log("this is error", error.message);
    });
};

export const deleteStylist = id => dispatch => {
  authAxios
    .delete(`/stylist/:stylistId${id}`)
    .then(res => {
      console.log("this is delete stylist", res);
    })
    .catch(err => console.log("this is delete user error", err));
};
