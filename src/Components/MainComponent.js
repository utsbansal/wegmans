import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Welcome from './WelcomeComponent';
import Employee from './EmployeeComponent';
import Manager from './ManagerComponent';

const Main = (props) => {
    return(
        <div>
            <Switch>
                <Route path="/welcome" render={() => <Welcome/>}/>
                <Route path="/employee" render={() => <Employee/>}/>
                <Route path="/manager" render={() => <Manager/>}/>
                <Redirect to="/welcome"/>
            </Switch>
        </div>
    );
}

export default Main;