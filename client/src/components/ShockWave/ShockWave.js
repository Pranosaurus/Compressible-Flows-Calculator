import React from 'react';
import NormalShock from './NormalShock';
import ObliqueShock from './ObliqueShock';

import {Link,useRouteMatch, useParams, BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function Topic () {
    let {topicId } = useParams();
    return(
        <h3> {topicId} </h3>
    )
}
const ShockWave = (props) => {
    let match = useRouteMatch();
    let {topicId} = useParams();

    return(
        <div> 
            <h1>ShockWave </h1>
            <ul>
                <Link to={`${match.url}/ObliqueShock`}> Oblique Shock </Link>
            </ul>
            <ul>
                <Link to = {`${match.url}/NormalShock`}> Normal Shock </Link>
            </ul>
            <h1> {topicId} </h1>
                <Switch>
            <Route path ={`${match.url}/ObliqueShock`}>
                <ObliqueShock/> 
            </Route>
            <Route path ={`${match.url}/ObliqueShock`}>
                <NormalShock/> 
            </Route>
            <Route path ={`${match.url}/:topicId`}>
                <Topic /> 
            </Route>
        </Switch>
        </div> 
    );
}

export default ShockWave;