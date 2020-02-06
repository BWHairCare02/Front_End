import axios from "axios";
import axiosWithAuth from "../axios/axiosAuth";

//////////////////////////// SIGNUP /////////////////////////////////////////////////
export const SIGNUP_USERNAME = "SIGNUP_USERNAME"; /// SIGNUP /////
export const SIGNUP_PASSWORD = "SIGNUP_PASSWORD"; /// SIGNUP /////
export const STYLIST_PASS = "STYLIST_PASS"; /// STYLIST /////
export const STYLIST_USER = "STYLIST_USER"; /// STYLIST /////
export const NOT_STYLIST = "NOT_STYLIST"; /// STYLIST /////
export const STYLIST = "STYLIST"; /// STYLIST /////
export const MAKE_CUSTOMER = "MAKE_CUSTOMER"; /// CUSTOMER /////
export const LOCATION_CUSTOMER = "LOCATION_CUSTOMER"; /// CUSTOMER /////
export const PASSWORD_CUSTOMER = "PASSWORD_CUSTOMER"; /// CUSTOMER /////
export const EMAIL_CUSTOMER = "EMAIL_CUSTOMER"; /// CUSTOMER /////
export const USERNAME_CUSTOMER = "USERNAME_CUSTOMER"; /// CUSTOMER /////
export const LOAD_CUSTOMER_SUCCESS = "LOAD_CUSTOMER_SUCCESS"; /// CUSTOMER /////
export const LOAD_CUSTOMER_FAILURE = "LOAD_CUSTOMER_FAILURE"; /// CUSTOMER /////
export const LOADING_CUSTOMER = "LOADING_CUSTOMER"; /// CUSTOMER /////
export const SUCCESS = "SUCCESS";
export const DESCRIPTION = "DESCRIPTION"; /// DESCRIPTION /////
export const LOAD_STYLIST_SUCCESS = "LOAD_STYLIST_SUCCESS"; /// STYLIST /////
export const LOAD_STYLIST_FAILURE = "LOAD_STYLIST_FAILURE"; /// STYLIST /////
export const LOADING_STYLIST = "LOADING_STYLIST"; /// STYLIST /////

export const description = data => ({ type: DESCRIPTION, payload: data }); /// DESCRIPTION /////
export const signupUser = data => ({ type: SIGNUP_USERNAME, payload: data }); /// SIGNUP USER /////
export const signupPass = data => ({ type: SIGNUP_PASSWORD, payload: data }); /// SIGNUP PASS /////
export const updateSignupUser = data => dispatch => {
  dispatch(signupUser(data)); /// UPDATE SIGNUP USER/////
};
export const updateSignupPass = data => dispatch => {
  dispatch(signupPass(data)); /// UPDATE SIGNUP PASS/////
};
export const customerMaking = data => ({ type: MAKE_CUSTOMER, payload: data }); ///MAKING CUSTOMER/////
export const customerLocation = data => ({
  type: LOCATION_CUSTOMER,
  payload: data /// CUSTOMER LOCATION/////
});
export const customerUserName = data => ({
  type: USERNAME_CUSTOMER,
  payload: data /// CUSTOMER USER/////
});
export const customerEmail = data => ({ type: EMAIL_CUSTOMER, payload: data }); /// CUSTOMER EMAIL /////
export const customerPassWord = data => ({
  type: PASSWORD_CUSTOMER,
  payload: data /// CUSTOMER PASS /////
});
export const customerSuccess = data => ({
  type: LOAD_CUSTOMER_SUCCESS,
  payload: data /// CUSTOMER LOAD SUCCESS /////
});
export const customerFailure = error => ({
  type: LOAD_CUSTOMER_FAILURE,
  payload: error /// CUSTOMER LOAD FAILURE/////
});
export const customerLoading = () => ({ type: LOADING_CUSTOMER }); /// CUSTOMER LOADING/////
export const successLoad = () => ({ type: SUCCESS }); /// SUCCESS/////
export const updateLocation = location => dispatch => {
  dispatch(customerLocation(location)); /// CUSTOMER LOCATION/////
};
export const updateEmail = email => dispatch => {
  dispatch(customerEmail(email)); /// UPDATE EMAIL/////
}; 
export const updateUserName = username => dispatch => {
  dispatch(customerUserName(username)); /// UPDATE USER/////
};
export const updatePassWord = password => dispatch => {
  dispatch(customerPassWord(password)); /// UPDATE PASS/////
};
export const stylistUser = data => ({ type: STYLIST_USER, payload: data }); /// STYLIST USER/////
export const stylistPass = data => ({ type: STYLIST_PASS, payload: data }); /// STYLIST PASS/////
export const customer = () => ({ type: NOT_STYLIST }); /// NOT A STYLIST/////
export const stylist = () => ({ type: STYLIST }); /// STYLIST USER/////
export const stylistFalse = () => dispatch => {
  dispatch(customer()); /// STYLIST FALSE/////
};
export const stylistTrue = () => dispatch => {
  dispatch(stylist()); /// STYLIST TRUE/////
};
export const updateStylistPass = password => dispatch => {
  dispatch(stylistPass(password)); ///  UPDATE STYLIST PASS/////
};
export const updateStylistUser = username => dispatch => {
  dispatch(stylistUser(username)); /// UPDATE STYLIST USER/////
};
export const stylistSuccess = data => ({
  type: LOAD_STYLIST_SUCCESS,
  payload: data /// STYLIST SUCCESS/////
});
export const stylistFailure = error => ({
  type: LOAD_STYLIST_FAILURE,
  payload: error /// STYLIST FAILURE/////
});
export const stylistLoading = () => ({ type: LOADING_STYLIST }); /// LOADING STYLIST/////

const authAxios = axiosWithAuth();

/////////////////////////////////// Customer Calls //////////////////////////

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
