import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/home';
import Project from './components/projectPortalList';
import ProjectCreate from './components/projectPortalCreate';
import ProjectDetail from './components/projectPortalDetail';
import Users from './components/operatorPortalUsersList';

const routes = (
        <Switch>
            <Route exact path="/" component={Home} /> 
            {/* <Route  path='/release/:fromReleaseVersion/:landscape/copy/' component={CopyRelease} />
            <Route  path='/release/:fromReleaseVersion/:landscape' component={VersionEntityDetail} /> */}
            <Route exact path="/project" component={Project} />
            <Route exact path="/project/create" component={ProjectCreate} />
            <Route exact path="/project/1" component={ProjectDetail} />
            <Route exact path="/users" component={Users} />
            </Switch>
);
export default routes;