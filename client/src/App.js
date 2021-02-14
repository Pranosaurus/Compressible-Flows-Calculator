import React from 'react';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import IsentropicFlow from './components/IsentropicFlow/IsentropicFlow';
import Nozzle_Diffuser from './components/Nozzle_Diffuser/Nozzle_Diffuser';
import Propulsion from './components/Propulsion/Propulsion';
import ShockWave from './components/ShockWave/ShockWave';
import Home from './components/Home';

const App = (props) => {
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/IsentropicFlow">IsentropicFlow </Link>
                    </li>
                    <li>
                        <Link to="/ShockWave"> Shock Wave </Link>
                    </li>
                    <li>
                        <Link to="/Nozzle_Diffuser"> Nozzle_Diffuser </Link>
                    </li> 
                    <li>
                        <Link to="/Propulsion"> Propulsion </Link> 
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path ="/">
                    <Home />
                </Route>
                <Route path="/Propulsion">
                    <Propulsion />
                </Route>
                <Route path="/Nozzle_Diffuser">
                    <Nozzle_Diffuser/>
                </Route>
                <Route path="/ShockWave">
                   <ShockWave />
                </Route>
                <Route path="/IsentropicFlow">
                    <IsentropicFlow />
                </Route>
            </Switch>
        </Router>
    );
}



export default App;