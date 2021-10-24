import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LogIn from '../LogIn/LogIn';
import PrivateRoute from '../LogIn/PrivateRoute';
import NavigationBar from '../NavigationBar/NavigationBar';
import News from '../News/News';
import Bangladesh from '../NewsOptions/Bangladesh';
import Business from '../NewsOptions/Business';
import Entertainment from '../NewsOptions/Entertainment';
import International from '../NewsOptions/International';
import Lifestyle from '../NewsOptions/Lifestyle';
import Opinion from '../NewsOptions/Opinion';
import Sports from '../NewsOptions/Sports';
import Youth from '../NewsOptions/Youth';
import Profile from '../Profile/Profile';

const Home = () => {
    return (
        <div>
            <Router>
                <NavigationBar></NavigationBar>
                <Switch>
                    <Route exact path="/">
                        <Bangladesh></Bangladesh>
                    </Route>
                    <Route path="/Bangladesh">
                        <Bangladesh></Bangladesh>
                    </Route>
                    <Route path="/International">
                        <International></International>
                    </Route>
                    <Route path="/Sports">
                        <Sports></Sports>
                    </Route>
                    <Route path="/Opinion">
                        <Opinion></Opinion>
                    </Route>
                    <Route path="/Business">
                        <Business></Business>
                    </Route>
                    <Route path="/Youth">
                        <Youth></Youth>
                    </Route>
                    <Route path="/Entertainment">
                        <Entertainment></Entertainment>
                    </Route>
                    <Route path="/Lifestyle">
                        <Lifestyle></Lifestyle>
                    </Route>
                    <PrivateRoute path="/Profile">
                        <Profile></Profile>
                    </PrivateRoute>
                    <Route path="/login">
                        <LogIn></LogIn>
                    </Route>
                    <Route path="/news/:_id">
                        <News></News>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;