import buildAxios from "../../config/buildAxios";
export const ADD_USER_SUBJECTS = "ADD_USER_SUBJECTS";
export const ADD_ACTIVE_SUBJECT = "ADD_ACTIVE_SUBJECT";
export const ADD_NEW_SUBJECT = "ADD_NEW-SUBJECT";
// import {user} from "../../store/user/selectors"

export const fetchAllSubjets = () => async (dispatch, useState) => {
  console.log("fetching all subjects");

  const { token } = useState().user;

  try {
    const response = await buildAxios(token).get("/subjects");
    dispatch({
      type: ADD_USER_SUBJECTS,
      payload: response.data.subjects,
    });
  } catch (e) {
    console.log("error", e);
  }
};

export const fetchSubjectById = (id) => async (dispatch, useState) => {
  const { token } = useState().user;
  try {
    const response = await buildAxios(token).get(`/subjects/${id}`);
    dispatch({
      type: ADD_ACTIVE_SUBJECT,
      payload: response.data,
    });
  } catch (e) {
    console.log("error", e);
  }
};
export const AddNewSubject = (name) => async (dispatch, getState) => {
  const { token } = getState().user;
  console.log('token', token, name)
  try {
    const response = await buildAxios(token).post(`/subjects`, {name});
    dispatch({
      type: ADD_NEW_SUBJECT,
	  payload: response.data.newSubject,
    });
	console.log("response", response.data)
  } catch (e) {
    console.log("error", e);
  }
};
