import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";

import { selectUser } from "../../store/user/selectors";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  const logOutHandler = () => {
    history.push("/");
    dispatch(logOut());
  };
  return (
    <>
      <span>{user.email}</span>
      <button onClick={logOutHandler}>Logout</button>
    </>
  );
}
