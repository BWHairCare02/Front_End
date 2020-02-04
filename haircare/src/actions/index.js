import axios from "axios";
import axiosWithAuth from "../axios/axiosWithAuth";

export const SIGNUP_USERNAME = "SIGNUP_USERNAME";
export const SIGNUP_PASSWORD = "SIGNUP_PASSWORD";
export const signupUser = data => ({ type: SIGNUP_USERNAME, payload: data });
export const signupPass = data => ({ type: SIGNUP_PASSWORD, payload: data });
export const MAKE_COSTUMER = "MAKE_COSTUMER";
export const costumerMaking = data => ({ type: MAKE_COSTUMER, payload: data });

// Costumer
export const STATE_COSTUMER = "STATE_COSTUMER";
export const costumerState = data => ({ type: STATE_COSTUMER, payload: data });
export const USERNAME_COSTUMER = "USERNAME_COSTUMER";
export const costumerUserName = data => ({
  type: USERNAME_COSTUMER,
  payload: data
});
export const EMAIL_COSTUMER = "EMAIL_COSTUMER";
export const costumerEmail = data => ({ type: EMAIL_COSTUMER, payload: data });
export const PASSWORD_COSTUMER = "PASSWORD_COSTUMER";
export const costumerPassWord = data => ({
  type: PASSWORD_COSTUMER,
  payload: data
});

//

export const LOAD_COSTUMER_SUCCESS = "LOAD_COSTUMER_SUCCESS";

export const LOAD_COSTUMER_FAILURE = "LOAD_COSTUMER_FAILURE";

export const LOADING_COSTUMER = "LOADING_COSTUMER";
export const costumerSuccess = data => ({
  type: LOAD_COSTUMER_SUCCESS,
  payload: data
});

export const costumerFailure = error => ({
  type: LOAD_COSTUMER_FAILURE,
  payload: error
});

export const costumerLoading = () => ({ type: LOADING_COSTUMER });

export const SUCCESS = "SUCCESS";
export const successload = () => ({ type: SUCCESS });

const authAxios = axiosWithAuth();

export const fetchCostumers = () => dispatch => {
  dispatch(costumerLoading());
  authAxios
    //   fix users below
    .get("/users")
    .then(res => {
      console.log("this is members response.data", res);
      dispatch(costumerSuccess(res.data));
      //successload()
    })
    .catch(error => {
      console.log("this is error", error.message);
      dispatch(costumerFailure(error.message));
    });
};

export const postCostumer = (
  stateCostumer,
  emailCostumer,
  signupUsername,
  signupPassword
) => dispatch => {
  dispatch(costumerLoading());
  authAxios
    .post("/auth/register", {
      state: stateCostumer,
      email: emailCostumer,
      username: signupUsername,
      password: signupPassword
    })
    .then(res => {
      console.log("this is postCostumer response.data", res);
      // dispatch(costumerMaking(res.data))
      //successLoad()
    })
    .catch(error => {
      console.log("this is error", error.message);
      //dispatch(costumerFailure(error.message))
    });
};
export const putMember = (
  stateCostumer,
  emailCostumer,
  signupUsername,
  signupPassword,
  id
) => dispatch => {
  dispatch(costumerLoading());
  authAxios
    .post(`/user/${id} `, {
      state: stateCostumer,
      email: emailCostumer,
      username: signupUsername,
      password: signupPassword
    })
    .then(res => {
      console.log("this is putCostumer response.data", res);
      // dispatch(costumerMaking(res.data))
      //successLoad()
    })
    .catch(error => {
      console.log("this is error", error.message);
      //dispatch(costumerFailure(error.message))
    });
};

// Member Updates
export const updateState = states => dispatch => {
  dispatch(costumerState(states));
};

export const updateEmail = email => dispatch => {
  dispatch(costumerEmail(email));
};

export const updateUserName = username => dispatch => {
  dispatch(costumerUserName(username));
};
export const updatePassWord = password => dispatch => {
  dispatch(costumerPassWord(password));
};

// signup Updates
export const updateSignupUser = data => dispatch => {
  dispatch(signupUser(data));
};
export const updateSignupPass = data => dispatch => {
  dispatch(signupPass(data));
};

export const updateStates = data => dispatch => {
  dispatch(costumerState(data));
};
