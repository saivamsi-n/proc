import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/home';
import Project from './components/projectPortalList';
import ProjectCreate from './components/projectPortalCreate';
import ProjectDetail from './components/projectPortalDetail';
import ProjectUsers from './components/projectUsers';
import ProjectUsersCreate from './components/projectUsersCreate';
import ProjectUseDetail from './components/projectUsersDetail';

const routes = (
        <Switch>
            <Route exact path="/" component={Home} /> 
            {/* <Route  path='/release/:fromReleaseVersion/:landscape/copy/' component={CopyRelease} />
            <Route  path='/release/:fromReleaseVersion/:landscape' component={VersionEntityDetail} /> */}
            <Route exact path="/projects" component={Project} />
            <Route exact path="/projects/create" component={ProjectCreate} />
            <Route exact path="/projects/:id" component={ProjectDetail} />
            <Route exact path="/users" component={ProjectUsers} />
            <Route exact path="/users/create" component={ProjectUsersCreate} />
            <Route exact path="/users/:username" component={ProjectUseDetail} />

            </Switch>
);
export default routes;