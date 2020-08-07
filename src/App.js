import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { selectToken } from "./store/user/selectors";
// pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { getUserWithStoredToken } from "./store/user/actions";
import FlashCard from "./pages/FlashCard";
import Subject from "./pages/Subject";
import Mypage from "./pages/Mypage/Mypage";

// components
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
// import "./App.css";
import "./styles.scss";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const history = useHistory();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    if (!token && !isLoading) {
      history.push("/");
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/subject/:subjectId" component={Subject} />
        <Route path="/flashcards/:flashcardId" component={FlashCard} />
      </Switch>
    </div>
  );
}

export default App;