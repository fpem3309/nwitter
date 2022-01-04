import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";
import Lotto from "routes/Lotto";
import Wave from "routes/Wave";
import Board from "routes/Board";
import PostList from "routes/PostList";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            <Wave userObj={userObj} />
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <div
                            style={{
                                maxWidth: 890,
                                width: "100%",
                                margin: "0 auto",
                                marginTop: 80,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Route exact path="/">
                                <Home userObj={userObj} />
                            </Route>
                            <Route exact path="/profile">
                                <Profile userObj={userObj} refreshUser={refreshUser} />
                            </Route>
                            <Route exact path="/lotto">
                                <Lotto />
                            </Route>
                            <Route exact path="/board">
                                <Board />
                            </Route>
                            <Route exact path="/postlist">
                                <PostList />
                            </Route>
                        </div>
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    </>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;