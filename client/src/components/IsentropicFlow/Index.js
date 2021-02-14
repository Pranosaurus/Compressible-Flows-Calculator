import React,{useState} from 'react';
import { Flow } from '../util/Flow';
import './IsentropicFlow2';
// Put Page Information Here ... not elsewhere ....
const Index = (props) => {
    const [flows,setFlows] = useState([new Flow()]);
    const [Active, setActive] = useState(null);

    FlowComponents = flows.map((flow,index)=> <IsentropicFlow2 flow={flow}/>)
    return(
        <React.Fragment>
            {FlowComponents} 
        </React.Fragment>
    );
}

export default Index;