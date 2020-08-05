import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { getUserWithStoredToken } from "./store/user/actions";
import FlashCard from "./pages/FlashCard";
import Subject from "./pages/Subject";
import Mypage from "./pages/Mypage";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
// import { Jumbotron } from "react-bootstrap";

// const Home = () => (
//   <Jumbotron>
//     <h1>Home</h1>
//   </Jumbotron>
// );
// const Other = () => (
//   <Jumbotron>
//     <h1>Other</h1>
//   </Jumbotron>
// );

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
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
      <div className="footer"></div>
    </div>
  );
}

export default App;
